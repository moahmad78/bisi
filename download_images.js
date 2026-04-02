const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
    'hero-1.webp': 'https://shyammetalics.com/static/media/blugs.c1fa9be1f7c62eb160a2.webp',
    'hero-2.jpg': 'https://www.beharilalengineering.com/assets/img/images/carbon-product-3.1.jpg?v=1.3',
    'hero-3.jpg': 'https://www.aonesteelgroup.com/wp-content/uploads/2024/06/Img.jpg',
    'hero-desktop.jpg': 'https://www.bisiengineering.in/static/media/hero-bg.e515046fe9ebbecc4127.jpg',
    'bg-about.jpg': 'https://tiimg.tistatic.com/fp/1/009/294/jsw-tmt-steel-bar-137.jpg',
    'bg-manufacturing.png': 'https://pushpasteel.com/wp-content/uploads/2024/12/pushpa-blog-1.png',
    'bg-industries.webp': 'https://songshunsteel.com/wp-content/uploads/2023/10/steel-manufacturers-Fabricators.webp',
    'bg-contact.jpg': 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop',
    'logo-tata.png': 'https://static.vecteezy.com/system/resources/previews/020/975/561/large_2x/tata-logo-tata-icon-transparent-free-png.png',
    'logo-jsw.png': 'https://e7.pngegg.com/pngimages/575/90/png-clipart-india-jsw-steel-ltd-jsw-group-logo-steel-blue-text.png',
    'logo-bhushan.png': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZy6qeFtL3kafMWOHuWZZNCxpQINigqqsb3A&s',
    'logo-vsp.png': 'https://www.3blmedia.com/sites/default/files/styles/5x4_l/public/images/VSPGlobal_4C_3.png?h=532f109e',
    'logo-arjas.png': 'https://premiersteels.in/wp-content/uploads/2020/03/suppliers-1.png',
    'logo-jaiswal.png': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrq_k3lBGlxEI4cQ2HVadObIP3lYPqxHt9Cw&s',
    'logo-gerdau.png': 'https://logospng.org/wp-content/uploads/gerdau.png',
    'logo-rinl.png': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-Kd_sEx2xPXWI0FQ_NLCe4Z6SO7MZMY3xw&s',
    'logo-abb.png': 'https://www.necanet.org/images/default-source/communities/premier-partners/abb-logo-2021.png?sfvrsn=582ea0e1_3',
    'logo-bosch.png': 'https://www.citypng.com/public/uploads/preview/hd-bosch-logo-transparent-background-701751694709021apdig4lrgg.png',
    'logo-tvs.jpg': 'https://1000logos.net/wp-content/uploads/2020/07/TVS-Motor-Logo.jpg',
    'logo-vst.png': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwVq-UspoAHUXHt0LJwe8HPlJqT3EZPdM2g&s',
    'bg-snapshot-1.jpg': 'https://images.unsplash.com/photo-1565515261920-561b6238b77a?q=80&w=2070&auto=format&fit=crop',
    'bg-snapshot-2.jpg': 'https://images.unsplash.com/photo-1532054942125-1e3914a1eb4c?q=80&w=2070&auto=format&fit=crop',
    'facility-cnc.jpg': 'https://avantiengineering.com/wp-content/uploads/2019/10/CNC-Screw-Machine.jpg',
    'facility-interior.jpg': 'https://www.aceprecision.com/wp-content/uploads/2024/10/INterior_Cover.jpg',
    'prod-round.jpg': 'https://www.metalsupplies.com/wp-content/uploads/2016/11/round-bar.jpg',
    'prod-square.png': 'https://5.imimg.com/data5/KJ/LP/GLADMIN-48916739/square-bars-500x500.png',
    'prod-flat.jpg': 'https://www.sanghvioverseas.com/blog/wp-content/uploads/2024/07/steel-flat-bar.jpg',
    'prod-hex.jpg': 'https://www.metalsupplies.com/wp-content/uploads/2012/08/metalsupplies_032.jpg',
    'prod-small.jpg': 'https://5.imimg.com/data5/SELLER/Default/2025/10/554032002/GK/KZ/AF/143763735/small-size-steel-bar-500x500.jpg',
    'prod-custom.jpg': 'https://image.made-in-china.com/43f34j00hwYlCjkfJRUa/Galvanized-Steel-Round-Bar-Price-12mm-16mm-32mm-Gi-Round-Rod-Bar-Zinc-Coated-Mental-Round-Square-Bar.webp',
    'sector-exporters.jpg': 'https://cdn2.hubspot.net/hubfs/242200/Stock%20images/Industrial%20port%20at%20dawn%20at%20the%20Port%20of%20Casablanca,%20Morocco..jpeg',
    'sector-hydraulic.jpg': 'https://img1.wsimg.com/isteam/ip/5056d7c1-e245-432d-a678-e2ca012047b0/hydraulic-fitting-india.jpg',
    'sector-spm.jpg': 'https://parcrobotics.in/wp-content/uploads/2025/04/steptodown.com176586.jpg',
    'sector-auto.png': 'https://www.keyence.com/Images/ss_sealing_p_automotive-parts_001_1791826.png',
    'sector-gen-eng.jpg': 'https://www.ucp.ac.uk/app/uploads/sites/4/2024/02/(UCP)Engineering2022%20(14).jpg'
};

const dir = 'public/assets/images';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

Object.entries(images).forEach(([name, url]) => {
    const filePath = path.join(dir, name);
    https.get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
            // Handle redirect
            https.get(res.headers.location, (res2) => {
                const fileStream = fs.createWriteStream(filePath);
                res2.pipe(fileStream);
                fileStream.on('finish', () => {
                    fileStream.close();
                    console.log(`Downloaded ${name}`);
                });
            });
        } else if (res.statusCode === 200) {
            const fileStream = fs.createWriteStream(filePath);
            res.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded ${name}`);
            });
        } else {
            console.error(`Failed to download ${name}: ${res.statusCode}`);
        }
    }).on('error', (err) => {
        console.error(`Error downloading ${name}: ${err.message}`);
    });
});
