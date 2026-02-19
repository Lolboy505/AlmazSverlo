import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express'; // установи: npm i -D express

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
    console.log('___Запуск программы запекания сайта___');
    const app = express();
    app.use(express.static(path.join(__dirname, 'dist')));
    const server = app.listen(8080);

    const browser = await puppeteer.launch({
        // new для откл
        headless: false,
        slowMo: 100,
        // devtools: true,
    }).finally(() => {
        console.log('# Заголовки установленны');
    })

    const page = await browser.newPage().finally(() => {
        console.log('# Браузер запущен');
    })

    await page.setViewport({ width: 1280, height: 800 })
        .catch((err) => {
            console.log("Page ERR: ", err)
        });

    await page.goto('http://localhost:8080', { waitUntil: 'networkidle0' }).finally(() => {
        console.log('# Процесс запекания начался');
    });

    // ТРЮК: Прокрутка вниз, чтобы подгрузить lazy-картинки и галерею
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            let distance = 100;
            let timer = setInterval(() => {
                let scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 200);
        });
    });

    // Ждем еще чуть-чуть для верности
    await new Promise(r => setTimeout(r, 3000));

    let html = await page.content();

    // УДАЛЯЕМ мусорный скрипт Vite, если он вдруг пролез
    html = html.replace(/<script type="module" src="\/@vite\/client"><\/script>/g, '');

    fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), html);

    await browser.close();
    server.close();
    console.log('✅ SEO-отпечаток готов (с картинками и без ошибок)!');
    process.exit(0);
}

run();