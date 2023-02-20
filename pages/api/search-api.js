import { getJson } from "serpapi";

const DUMMY = false;
export default async function handler(req, res) {
  const { url } = req.query;
  //console.log(url, process.env.SERPAPI_API_KEY);
  if (!url) {
    res
      .status(403)
      .json({ success: false, message: "Please, enter image URL" });
  }
  const result = DUMMY
    ? dummyResult
    : await getJson("yandex_images", {
        url,
        api_key: process.env.SERPAPI_API_KEY,
      });
  res.status(200).json(result);
}

const dummyResult = {
  search_metadata: {
    id: "63f2f0e47690dc68b416995d",
    status: "Success",
    json_endpoint:
      "https://serpapi.com/searches/8e56df93a9f4a447/63f2f0e47690dc68b416995d.json",
    created_at: "2023-02-20 04:02:44 UTC",
    processed_at: "2023-02-20 04:02:44 UTC",
    yandex_images_url:
      "https://yandex.com/images/search/?url=https://img1.goodfon.com/original/5616x3744/2/1e/kofe-napitok-sahar-chashka.jpg&rpt=imageview",
    raw_html_file:
      "https://serpapi.com/searches/8e56df93a9f4a447/63f2f0e47690dc68b416995d.html",
    total_time_taken: 5.23,
  },
  search_parameters: {
    engine: "yandex_images",
    url: "https://img1.goodfon.com/original/5616x3744/2/1e/kofe-napitok-sahar-chashka.jpg",
  },
  image_preview: {
    image: {
      link: "https://avatars.mds.yandex.net/get-images-cbir/8752227/0LugLEh6nRjejDB3uK6Vxg5765/orig",
      serpapi_link:
        "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig",
      height: 5616,
      width: 3744,
    },
    crops: [
      {
        category: "кухонные принадлежности",
        is_product: true,
        crop_id: 0,
        crop: "0.3918457031;0.1638183594;0.853515625;0.7158203125",
        serpapi_link:
          "https://serpapi.com/search.json?crop_id=0&engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig",
      },
      {
        category: "еда",
        is_product: true,
        crop_id: 2,
        crop: "0.1873779297;0.6625976563;0.2912597656;0.7973632813",
        serpapi_link:
          "https://serpapi.com/search.json?crop_id=2&engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig",
      },
    ],
  },
  image_results: [
    {
      title:
        "Download wallpaper coffee, Cup, sugar, drink, section food in resolution 5616x3744",
      snippet: "coffee, Cup, sugar, drink. ",
      link: "https://avto.goodfon.com/download/kofe-napitok-sahar-chashka/5616x3744/",
      source: "avto.goodfon.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2546ea722f368a7b4bd05a231c5b73d9923062aa-4238413-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2546ea722f368a7b4bd05a231c5b73d9923062aa-4238413-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://img1.goodfon.com/original/5616x3744/2/1e/kofe-napitok-sahar-chashka.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimg1.goodfon.com%2Foriginal%2F5616x3744%2F2%2F1e%2Fkofe-napitok-sahar-chashka.jpg",
        height: 3744,
        width: 5616,
      },
    },
    {
      title: "Кофе (сливки, сахар)",
      snippet: "Кофе (сливки, сахар) ",
      link: "https://urbankitchen.ru/tproduct/1-845909006501-kofe-slivki-sahar",
      source: "urbankitchen.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=61e7e89fdff41ff572b5e0b968184f9947c997cd-8200978-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D61e7e89fdff41ff572b5e0b968184f9947c997cd-8200978-images-thumbs",
        height: 93,
        width: 150,
      },
      original_image: {
        link: "https://static.tildacdn.com/tild3565-3938-4561-b735-313763653366/kofe-bez-kofeina-pol.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fstatic.tildacdn.com%2Ftild3565-3938-4561-b735-313763653366%2Fkofe-bez-kofeina-pol.jpg",
        height: 1200,
        width: 1920,
      },
    },
    {
      title: "Кофе оказался причиной уменьшения объёма мозга",
      link: "https://raupress.ru/news-2154173-kofe-okazalsya-prichinoj-umensheniya-obema-mozga.html",
      source: "raupress.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=1ecdd089a7d6fae6b13eb5a4875b1cc1b2e5dcde-8271622-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D1ecdd089a7d6fae6b13eb5a4875b1cc1b2e5dcde-8271622-images-thumbs",
        height: 93,
        width: 150,
      },
      original_image: {
        link: "https://raupress.ru/onews/aHR0cHM6Ly93d3cuZmVycmEucnUvaW1ncy8yMDIyLzAxLzE1LzE2LzUxNzE2NjEvNTg4NmI0MWQwMjlhNmQxNDU1MWEwYjg5ZTk1MmM1MmMxMWIwYWUwNi5qcGc=",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fraupress.ru%2Fonews%2FaHR0cHM6Ly93d3cuZmVycmEucnUvaW1ncy8yMDIyLzAxLzE1LzE2LzUxNzE2NjEvNTg4NmI0MWQwMjlhNmQxNDU1MWEwYjg5ZTk1MmM1MmMxMWIwYWUwNi5qcGc%3D",
        height: 1200,
        width: 1920,
      },
    },
    {
      title:
        "Кофе при грудном вскармливании: можно ли пить при ГВ в первый месяц, напиток с молоком для кормящей мамы, мнение Комаровского и",
      link: "https://eda-land.ru/napitki/kofe/pri-grudnom-vskarmlivanii/",
      source: "eda-land.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=61e7e89fdff41ff572b5e0b968184f9947c997cd-8200978-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D61e7e89fdff41ff572b5e0b968184f9947c997cd-8200978-images-thumbs",
        height: 93,
        width: 150,
      },
      original_image: {
        link: "https://eda-land.ru/images/article/orig/2018/08/kofe-pri-grudnom-vskarmlivanii-mozhno-li-pit-i-chem-zamenit.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Feda-land.ru%2Fimages%2Farticle%2Forig%2F2018%2F08%2Fkofe-pri-grudnom-vskarmlivanii-mozhno-li-pit-i-chem-zamenit.jpg",
        height: 1200,
        width: 1920,
      },
    },
    {
      title: "Кофенин өзгөчө касиети",
      link: "https://barometr.kg/kg/content14429",
      source: "barometr.kg",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=61e7e89fdff41ff572b5e0b968184f9947c997cd-8200978-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D61e7e89fdff41ff572b5e0b968184f9947c997cd-8200978-images-thumbs",
        height: 93,
        width: 150,
      },
      original_image: {
        link: "https://barometr.kg/storage/app/uploads/public/621/368/656/62136865652b7183268474.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fbarometr.kg%2Fstorage%2Fapp%2Fuploads%2Fpublic%2F621%2F368%2F656%2F62136865652b7183268474.jpg",
        height: 1200,
        width: 1920,
      },
    },
    {
      title: "Diabetes and the Preventive Power of Coffee!",
      snippet: "Diabetes and the Preventive Power of Coffee! ",
      link: "https://www.sanitarac.com/portals/articles/item/862-diabetes-and-the-preventive-power-of-coffee.html?tmpl=component&print=1",
      source: "sanitarac.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=ea97e2549144432d3c5a347984a10c984763adb6-8497314-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dea97e2549144432d3c5a347984a10c984763adb6-8497314-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://www.sanitarac.com/portals/media/k2/items/cache/597106f07a53c1d5cb7a9980c4c166ec_XL.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fwww.sanitarac.com%2Fportals%2Fmedia%2Fk2%2Fitems%2Fcache%2F597106f07a53c1d5cb7a9980c4c166ec_XL.jpg",
        height: 1278,
        width: 1920,
      },
    },
    {
      title:
        "Какая посуда понадобится, чтобы приготовить кофе: полный список предметов",
      snippet:
        "Стандартным размером для порции американо считается чашка объемом 150-200 мл. ",
      link: "https://posudaguide.ru/dlya-chaya-i-kofe/posuda-dlya-prigotovleniya-kofejnyh-napitkov",
      source: "posudaguide.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2546ea722f368a7b4bd05a231c5b73d9923062aa-4238413-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2546ea722f368a7b4bd05a231c5b73d9923062aa-4238413-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://posudaguide.ru/wp-content/uploads/2019/02/CHashka-s-amerikano.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fposudaguide.ru%2Fwp-content%2Fuploads%2F2019%2F02%2FCHashka-s-amerikano.jpg",
        height: 3744,
        width: 5616,
      },
    },
    {
      title: "может ли от сердца болеть ноги",
      link: "https://www.fity.club/lists/suggestions/%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%BB%D0%B8-%D0%BE%D1%82-%D1%81%D0%B5%D1%80%D0%B4%D1%86%D0%B0-%D0%B1%D0%BE%D0%BB%D0%B5%D1%82%D1%8C-%D0%BD%D0%BE%D0%B3%D0%B8/",
      source: "fity.club",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=99bebe2aa676d59d9b4ad7453873b9a923ca39bf-7553437-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D99bebe2aa676d59d9b4ad7453873b9a923ca39bf-7553437-images-thumbs",
        height: 108,
        width: 150,
      },
      original_image: {
        link: "https://kivahan.ru/wp-content/uploads/2017/01/kofe-127.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fkivahan.ru%2Fwp-content%2Fuploads%2F2017%2F01%2Fkofe-127.jpg",
        height: 738,
        width: 1024,
      },
    },
    {
      title:
        "Кофе на ночь: за сколько часов до сна можно пить, как избежать бессонницы, чем заменить",
      snippet: "Мнение медиков об употреблении кофе на ночь ",
      link: "https://about-tea.ru/kofe-na-noc-za-skolko-casov-do-sna-mozno-pit-kak-izbezat-bessonnicy-cem-zamenit/",
      source: "about-tea.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=99bebe2aa676d59d9b4ad7453873b9a923ca39bf-7553437-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D99bebe2aa676d59d9b4ad7453873b9a923ca39bf-7553437-images-thumbs",
        height: 108,
        width: 150,
      },
      original_image: {
        link: "https://about-tea.ru/wp-content/uploads/4/c/9/4c9ca5fbdb9ef17383751049be18493b.jpeg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fabout-tea.ru%2Fwp-content%2Fuploads%2F4%2Fc%2F9%2F4c9ca5fbdb9ef17383751049be18493b.jpeg",
        height: 738,
        width: 1024,
      },
    },
    {
      title:
        "Российский депутат предложила отказаться от кофе по утрам, чтобы помочь военным - discover24.ru",
      link: "https://discover24.ru/2022/10/rossiyskiy-deputat-predlozhila-otkazatsya-ot-kofe-po-utram-chtoby-pomoch-voennym/",
      source: "discover24.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2efccd8583e37c5a1c4af17baac1a090148af0d3-5451357-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2efccd8583e37c5a1c4af17baac1a090148af0d3-5451357-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://discover24.ru/wp-content/uploads/2022/10/17171-1024x683.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fdiscover24.ru%2Fwp-content%2Fuploads%2F2022%2F10%2F17171-1024x683.jpg",
        height: 683,
        width: 1024,
      },
    },
    {
      title:
        "Фото: I Coffee, кофейня, Гостиничный пр., 6, корп. 2 - Яндекс.Карты",
      link: "https://yandex.ru/maps/org/i_coffee/1206477870/gallery/?ll=37.576634%2C55.844115&z=13",
      source: "yandex.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=a755a3327612dce3368d2f166c4d1a3e-5434197-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Da755a3327612dce3368d2f166c4d1a3e-5434197-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://avatars.mds.yandex.net/get-altay/2755030/2a0000017386bfe94f51b54499c2f6bcf502/XXL",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-altay%2F2755030%2F2a0000017386bfe94f51b54499c2f6bcf502%2FXXL",
        height: 683,
        width: 1024,
      },
    },
    {
      title: "Www.psk.ru",
      link: "https://www.pixelrz.com/lists/suggestions/www.psk.ru/",
      source: "pixelrz.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=34fab306f08851cefe004b6df99d96cc245fed9e-6977815-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D34fab306f08851cefe004b6df99d96cc245fed9e-6977815-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://images.golos.io/DQmVvdcwpQuebbV2vxbWTGAXgyDcUhVxa9vvh8WBfBo5BmU/0_2d1d8a_3165b77_XXL_compressed%20%E2%80%94%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%20(1).jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimages.golos.io%2FDQmVvdcwpQuebbV2vxbWTGAXgyDcUhVxa9vvh8WBfBo5BmU%2F0_2d1d8a_3165b77_XXL_compressed%2520%25E2%2580%2594%2520%25D0%25BA%25D0%25BE%25D0%25BF%25D0%25B8%25D1%258F%2520%281%29.jpg",
        height: 682,
        width: 1024,
      },
    },
    {
      title: "Владивосток Ученые: Кофе приводит к бессонице - БезФормата",
      link: "https://vladivostok.bezformata.com/listnews/uchenie-kofe-privodit-k-bessonitce/68907588/",
      source: "vladivostok.bezformata.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=d862f95c4a75424bf05f53aaccdcd24307e5826c-7546005-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dd862f95c4a75424bf05f53aaccdcd24307e5826c-7546005-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://www.vladtime.ru/uploads/posts/2018-08/1534143324_0_2d1d8a_3165b77_xxl_compressed.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fwww.vladtime.ru%2Fuploads%2Fposts%2F2018-08%2F1534143324_0_2d1d8a_3165b77_xxl_compressed.jpg",
        height: 682,
        width: 1024,
      },
    },
    {
      title: "Кофеин и спортивное питание ЗДРАВОБЛОГ",
      link: "https://zdravoblog.ru/kofein-i-sportivnoe-pitanie/",
      source: "zdravoblog.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=45fe1b08448d85e72fe0e08354fb6637f10c6baf-8491910-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D45fe1b08448d85e72fe0e08354fb6637f10c6baf-8491910-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://zdravoblog.ru/wp-content/uploads/2016/05/coffee.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fzdravoblog.ru%2Fwp-content%2Fuploads%2F2016%2F05%2Fcoffee.jpg",
        height: 300,
        width: 400,
      },
    },
    {
      title:
        'Ученые определили влияние кофе на кишечник " Новости Калининграда и области сегодня, последние калининградские новости, новости',
      link: "https://yaostrov.ru/policy/81041-uchenye-opredelili-vliyanie-kofe-na-kishechnik.html",
      source: "yaostrov.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=057eeee0653879f59a11ab64c14904c47dbf6813-7953126-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D057eeee0653879f59a11ab64c14904c47dbf6813-7953126-images-thumbs",
        height: 99,
        width: 150,
      },
      original_image: {
        link: "https://yaostrov.ru/uploads/posts/2018-12/15462384021xxl.jpeg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fyaostrov.ru%2Fuploads%2Fposts%2F2018-12%2F15462384021xxl.jpeg",
        height: 266,
        width: 400,
      },
    },
    {
      title:
        "Cup of coffee and brown sugar cubes near it on the old wooden table. Coffee drinks, Coffee reading, Best coffee",
      link: "https://in.pinterest.com/pin/313563192802309414/",
      source: "in.pinterest.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=82d3fd557932738b1789dc8b0e260b73-4306538-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D82d3fd557932738b1789dc8b0e260b73-4306538-images-thumbs",
        height: 107,
        width: 150,
      },
      original_image: {
        link: "https://i.pinimg.com/736x/6f/65/bd/6f65bde7cd387abf3572183e729d13f2.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fi.pinimg.com%2F736x%2F6f%2F65%2Fbd%2F6f65bde7cd387abf3572183e729d13f2.jpg",
        height: 280,
        width: 390,
      },
    },
    {
      title:
        "Ленобласть обл. - usa.one ► Последние новости на русском языке на сайте usa.one",
      link: "https://usa.one/news/location/oblast-lenoblast",
      source: "usa.one",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=ab6ec117d6896b4ae63f676ab055b11b841d31b1-8339189-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dab6ec117d6896b4ae63f676ab055b11b841d31b1-8339189-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://usa.one/news/storage/thumbs_400/img/2022/9/5/140317_wqcc.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fusa.one%2Fnews%2Fstorage%2Fthumbs_400%2Fimg%2F2022%2F9%2F5%2F140317_wqcc.jpg",
        height: 267,
        width: 400,
      },
    },
    {
      title:
        "ВЫ ЛЮБИТЕ КОФЕ?ДА НЕТ 8 #опросы Интересный контент в группе Женский Журнал",
      link: "https://ok.ru/group56916142981367/topic/131106149305335",
      source: "ok.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=edd43fad7bbea020c7d808c9199899e0-5270087-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dedd43fad7bbea020c7d808c9199899e0-5270087-images-thumbs",
        height: 99,
        width: 150,
      },
      original_image: {
        link: "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkeRWgMrGPAX3QL7a7pcPRWaaKTM5SRkZCeTgDn6uOyic",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fi.mycdn.me%2Fi%3Fr%3DAzEPZsRbOZEKgBhR0XGMT1RkeRWgMrGPAX3QL7a7pcPRWaaKTM5SRkZCeTgDn6uOyic",
        height: 266,
        width: 400,
      },
    },
    {
      title: "Биологи обнаружили еще одну пользу кофе",
      snippet: "Биологи обнаружили еще одну пользу кофе ",
      link: "https://ru.baku.ws/eto-interesno/169117",
      source: "ru.baku.ws",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=e70a2a1f656718b7b7f3adbbc56dabd5b3232ce1-8209451-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3De70a2a1f656718b7b7f3adbbc56dabd5b3232ce1-8209451-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://ru.baku.ws/uploads/posts/2023-01/1673548373_1.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fru.baku.ws%2Fuploads%2Fposts%2F2023-01%2F1673548373_1.jpg",
        height: 3744,
        width: 5616,
      },
    },
    {
      title: "Употребление Full hd wallpapers download - findle.top",
      snippet:
        "Употребление кофе снижает риск развития болезней печени infosmi ",
      link: "https://findle.top/photos/%C2%AB%D0%A3%D0%BF%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5",
      source: "findle.top",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=26abf0626b4d18e6a0c77d98925601f7479ea379-4478399-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D26abf0626b4d18e6a0c77d98925601f7479ea379-4478399-images-thumbs",
        height: 93,
        width: 150,
      },
      original_image: {
        link: "https://infosmi.net/wp-content/uploads/2021/06/kofe-bez-kofeina-poleznye-svojstva-i-protivopokazaniya-1536x960.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Finfosmi.net%2Fwp-content%2Fuploads%2F2021%2F06%2Fkofe-bez-kofeina-poleznye-svojstva-i-protivopokazaniya-1536x960.jpg",
        height: 960,
        width: 1536,
      },
    },
    {
      title: "Меню и цены Кафе Caramel - Рестораны - Владимир",
      snippet: "кафе Caramel. ",
      link: "https://vladimir.zoon.ru/restaurants/kafe_caramel/menu/",
      source: "vladimir.zoon.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=aef2bc716bbc9cce9f201ad8075930a71170fcbe-7716203-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Daef2bc716bbc9cce9f201ad8075930a71170fcbe-7716203-images-thumbs",
        height: 93,
        width: 150,
      },
      original_image: {
        link: "https://pr1.zoon.ru/0Ec1n6HXedp8S43kAhX4jA/1280x800,q85/D3Ahv-tP4GyNDEPHtrtcmR2jovXXjDXxgEtzs7A-Y073Gu8_ukeqjYilmzsQcEhJUvEaZkVARyqoiimUe3bGcpsBtjrsHMtv",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fpr1.zoon.ru%2F0Ec1n6HXedp8S43kAhX4jA%2F1280x800%2Cq85%2FD3Ahv-tP4GyNDEPHtrtcmR2jovXXjDXxgEtzs7A-Y073Gu8_ukeqjYilmzsQcEhJUvEaZkVARyqoiimUe3bGcpsBtjrsHMtv",
        height: 800,
        width: 1280,
      },
    },
    {
      title:
        'Шесть продуктов, ускоряющих старение, назвала тренер по омоложению Главные новости Казахстана - Новостной портал "Экспресс К"',
      snippet:
        "Чтобы быть здоровым, нужно соблюдать несколько простых правил. ",
      link: "https://exk.kz/news/143036/shiest-produktov-uskoriaiushchikh-starieniie-nazvala-trienier-po-omolozhieniiu",
      source: "exk.kz",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2546ea722f368a7b4bd05a231c5b73d9923062aa-4238413-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2546ea722f368a7b4bd05a231c5b73d9923062aa-4238413-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://static.exk.kz/4ecc991efc0c377ca73bc0662fd1920c.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fstatic.exk.kz%2F4ecc991efc0c377ca73bc0662fd1920c.jpg",
        height: 3744,
        width: 5616,
      },
    },
    {
      title: "Вк Кофе Фото - Фото Картинки",
      snippet: "Вк Кофе Фото ",
      link: "https://letsgophotos.ru/%D0%B2%D0%BA-%D0%BA%D0%BE%D1%84%D0%B5-%D1%84%D0%BE%D1%82%D0%BE/",
      source: "letsgophotos.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2546ea722f368a7b4bd05a231c5b73d9923062aa-4238413-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2546ea722f368a7b4bd05a231c5b73d9923062aa-4238413-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "http://like-site.ru/wp-content/uploads/2019/07/Rejting-luchshego-kofe.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=http%3A%2F%2Flike-site.ru%2Fwp-content%2Fuploads%2F2019%2F07%2FRejting-luchshego-kofe.jpg",
        height: 3744,
        width: 5616,
      },
    },
    {
      title: "26 отзывов Волжская березка, кафе Саратов",
      snippet: "Фото от владельца Волжская березка, кафе ",
      link: "https://otzivclub.ru/?foto=5863807-voljskaya_berezka_kafe",
      source: "otzivclub.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=66ca26ae92b17ad4c73bed2a0ffc758f993a8b39-8185142-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D66ca26ae92b17ad4c73bed2a0ffc758f993a8b39-8185142-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://i3.photo.2gis.com/images/branch/43/6051712032277406_c724.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fi3.photo.2gis.com%2Fimages%2Fbranch%2F43%2F6051712032277406_c724.jpg",
        height: 960,
        width: 1440,
      },
    },
    {
      title: "resiko katarak Ordinary Coffee",
      snippet: "resiko katarak ",
      link: "https://zulitaufik.wordpress.com/tag/resiko-katarak/",
      source: "zulitaufik.wordpress.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=196a975308dbff0111d47857b0bee08338f20ebc-7756253-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D196a975308dbff0111d47857b0bee08338f20ebc-7756253-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://zulitaufik.files.wordpress.com/2016/02/katarak.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fzulitaufik.files.wordpress.com%2F2016%2F02%2Fkatarak.jpg",
        height: 500,
        width: 500,
      },
    },
    {
      title: "Beer vs. Coffee vs. Energy Drinks #Infographic",
      snippet:
        'All of these drinks are the perfect companion when you crave a little turbo boos <a class="g1-link g1-link-more" href="https://joyenergizer.com/beer-vs-coffee-vs-energy-drinks-infographic/">More</a> ',
      link: "https://joyenergizer.com/beer-vs-coffee-vs-energy-drinks-infographic/",
      source: "joyenergizer.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=1c1ef62217226f658174d18cd4fc5aacc44e453f-8496968-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D1c1ef62217226f658174d18cd4fc5aacc44e453f-8496968-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://joyenergizer.com/wp-content/uploads/2015/10/coffee-enjoy-and-destroy.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fjoyenergizer.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fcoffee-enjoy-and-destroy.jpg",
        height: 533,
        width: 800,
      },
    },
    {
      title:
        "Тверская область: ввозили торф из Литвы, кофе из Бразилии ► Последние новости",
      snippet:
        "Тверская область: ввозили торф из Литвы, кофе из Бразилии ▸ Последние новости ",
      link: "https://imag.one/news/tverskaya-oblast-vvozili-torf-iz-litvy-kofe-2/13292304",
      source: "imag.one",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=1d9a570e66c21dec94527aa9fb96f5380007d49a-8497448-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D1d9a570e66c21dec94527aa9fb96f5380007d49a-8497448-images-thumbs",
        height: 96,
        width: 150,
      },
      original_image: {
        link: "https://imag.one/storage/img/2023/1/16/13292304_qhj.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimag.one%2Fstorage%2Fimg%2F2023%2F1%2F16%2F13292304_qhj.jpg",
        height: 645,
        width: 1000,
      },
    },
    {
      title: 'Меню шашлык - Шашлычная " Мясной двор"',
      link: "https://www.syvlaki.ru/menu/",
      source: "syvlaki.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=3fd3f4df0b73bc67ea9b632a96c767b1aa817df1-8534972-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D3fd3f4df0b73bc67ea9b632a96c767b1aa817df1-8534972-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://www.syvlaki.ru/assets/images/products/14/coffe-1.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fwww.syvlaki.ru%2Fassets%2Fimages%2Fproducts%2F14%2Fcoffe-1.jpg",
        height: 533,
        width: 800,
      },
    },
    {
      title: "Safe Socks 🐈 ⬛ Dark - Telegram",
      snippet:
        '☕ Получаем бесплатно 60 напитков "Американо" в "Мой Бургер" "Мой Бургер" - это уже ушедший из России "McDonald’s". ',
      link: "https://t.me/darktelegram9",
      source: "t.me",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=6d30e5caa4c06af362178829d1044aee6d12babc-5478197-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D6d30e5caa4c06af362178829d1044aee6d12babc-5478197-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://cdn4.telegram-cdn.org/file/pPxYqmiA7iMtMI1ZdRMfDNAnkp2wIWFdngmYISwPNmcyd65Olw3S7Tdam_rhUc4MeJff09JtnI1_pT5Yk4UAKzBr1vMHq1RRLc6GnMHzmbvvgpGauk4y4jKcBgFa8TlnWhmBocrGgrdCwRjyG7ghI2Pms9mEDwmEs3hehQ96d7JBOJUJV6OVP-NwwSy-AG8V8syZxdZXXgnbhDoVMVunPLIelrFy85Yr5hUSD0FyVxI1lh0toxGLlXPgwXNS6H-kDPQIOEaSPjNe5YlJyZquuCOH_Frts-SW3hY4ypgsmRzOmWbMCYJtfqKcPKSKPFTfVHq8GXNsa8CslZdSktp5dQ.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fcdn4.telegram-cdn.org%2Ffile%2FpPxYqmiA7iMtMI1ZdRMfDNAnkp2wIWFdngmYISwPNmcyd65Olw3S7Tdam_rhUc4MeJff09JtnI1_pT5Yk4UAKzBr1vMHq1RRLc6GnMHzmbvvgpGauk4y4jKcBgFa8TlnWhmBocrGgrdCwRjyG7ghI2Pms9mEDwmEs3hehQ96d7JBOJUJV6OVP-NwwSy-AG8V8syZxdZXXgnbhDoVMVunPLIelrFy85Yr5hUSD0FyVxI1lh0toxGLlXPgwXNS6H-kDPQIOEaSPjNe5YlJyZquuCOH_Frts-SW3hY4ypgsmRzOmWbMCYJtfqKcPKSKPFTfVHq8GXNsa8CslZdSktp5dQ.jpg",
        height: 533,
        width: 800,
      },
    },
    {
      title:
        "Доброе утро, уважаемые друзья ! У нас - 9 теплынь, слабый ветерок. Город очищен от снега полностью. Чуть чуть на Пржевальского..",
      snippet: "Доброе утро, уважаемые друзья ! ",
      link: "https://vk.com/wall287521093_7229",
      source: "vk.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=8e34878c99ef0dded355beb8f3a1d580c2a18065-8497298-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D8e34878c99ef0dded355beb8f3a1d580c2a18065-8497298-images-thumbs",
        height: 99,
        width: 150,
      },
      original_image: {
        link: "https://sun9-66.userapi.com/impg/XOY2WHS-63qMhTJp5y_ESUe0UeBoRNQAxNRwjw/9ZdqpKii-O0.jpg?size=604x400&quality=95&sign=3ced03cb07bfd982f08c8489d48af06f&c_uniq_tag=Gdc3p53klLNLkwZt-dXf7PMri2r4gQwGu_PK8LmAnXQ&type=album",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun9-66.userapi.com%2Fimpg%2FXOY2WHS-63qMhTJp5y_ESUe0UeBoRNQAxNRwjw%2F9ZdqpKii-O0.jpg%3Fsize%3D604x400%26quality%3D95%26sign%3D3ced03cb07bfd982f08c8489d48af06f%26c_uniq_tag%3DGdc3p53klLNLkwZt-dXf7PMri2r4gQwGu_PK8LmAnXQ%26type%3Dalbum",
        height: 400,
        width: 604,
      },
    },
    {
      title:
        "Информ-прогулка - Свежие новости Лунинца и Лунинецкого района. Расписание движения автобусов и поездов.",
      snippet: "05 февраля 2023, 19:24. ",
      link: "https://inform-progulka.by/",
      source: "inform-progulka.by",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=bdb3a3184b1cfdaf64ef252e57d9a3eb1dc2f050-9097093-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dbdb3a3184b1cfdaf64ef252e57d9a3eb1dc2f050-9097093-images-thumbs",
        height: 84,
        width: 150,
      },
      original_image: {
        link: "https://inform-progulka.by/wp-content/uploads/2023/02/chashka-s-amerikano-995x560.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Finform-progulka.by%2Fwp-content%2Fuploads%2F2023%2F02%2Fchashka-s-amerikano-995x560.jpg",
        height: 560,
        width: 995,
      },
    },
    {
      title:
        "Очень вкусно! Группа на OK.ru Вступай, читай, общайся в Одноклассниках!",
      link: "https://ok.ru/group/57303149183196",
      source: "ok.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2878166322eaf69dac21aaa53f7b2aa12fe110e2-8497133-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2878166322eaf69dac21aaa53f7b2aa12fe110e2-8497133-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://i.mycdn.me/i?r=AzGBqNaF5OQp2lMpnhRx4DEFJ2EQGaHPcEPZ9WV0Q7Bkk1yocoweiUJ-IQfliA4Qjz8",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fi.mycdn.me%2Fi%3Fr%3DAzGBqNaF5OQp2lMpnhRx4DEFJ2EQGaHPcEPZ9WV0Q7Bkk1yocoweiUJ-IQfliA4Qjz8",
        height: 244,
        width: 244,
      },
    },
    {
      title:
        'На трассе М10 в Тверской области в ДТП погиб водитель "семерки". Авария на М10. ДТП на М10. Новости Твери и Тверской области сег',
      link: "https://www.afanasy.biz/news/incident/201243",
      source: "afanasy.biz",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=22cdc5adf18067d0da646c5922a3b32a46a33558-8497242-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D22cdc5adf18067d0da646c5922a3b32a46a33558-8497242-images-thumbs",
        height: 96,
        width: 150,
      },
      original_image: {
        link: "https://285800.selcdn.ru/upload-media/resize_cache/356986/88ec5dbc6a7d011bf1791df88f3e367d/iblock/b24/b245f5d7fc92519a80b76750e53e65c1/db5e997cec8957a4daf99230bcf1d9cd.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2F285800.selcdn.ru%2Fupload-media%2Fresize_cache%2F356986%2F88ec5dbc6a7d011bf1791df88f3e367d%2Fiblock%2Fb24%2Fb245f5d7fc92519a80b76750e53e65c1%2Fdb5e997cec8957a4daf99230bcf1d9cd.jpg",
        height: 213,
        width: 330,
      },
    },
    {
      title: "Мальчик летчик - Boy pilot",
      snippet: "Кофе - Coffee ",
      link: "https://www.firestock.ru/malchik-letchik-boy-pilot/",
      source: "firestock.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=f64369d2ac994352d04a46953f54e71442aee8e0-8548977-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Df64369d2ac994352d04a46953f54e71442aee8e0-8548977-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://www.firestock.ru/wp-content/uploads/2015/02/Dollarphotoclub_62567819-255x255.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fwww.firestock.ru%2Fwp-content%2Fuploads%2F2015%2F02%2FDollarphotoclub_62567819-255x255.jpg",
        height: 255,
        width: 255,
      },
    },
    {
      title: "Можно ли пить кофе во время простуды?",
      snippet: "Можно ли пить кофе при простуде? ",
      link: "https://gorenje-rus.ru/news/mozhno-li-pit-kofe-pri-prostude",
      source: "gorenje-rus.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=dc098ed662b553d92ecadd8388593e5185f969c0-7598369-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Ddc098ed662b553d92ecadd8388593e5185f969c0-7598369-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://s1.gorenje-rus.ru/content/08/73/873/157273181674544652/thumb-box_320x320_157273181674544652.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fs1.gorenje-rus.ru%2Fcontent%2F08%2F73%2F873%2F157273181674544652%2Fthumb-box_320x320_157273181674544652.jpg",
        height: 320,
        width: 320,
      },
    },
    {
      title: "Prolifeblog24.ru",
      snippet:
        "5 հի վանդություններ, որոնց ամենահզոր թշ նամին համարվում է սուրճը, այո՛-այո՛, հասարակ ՍՈՒՐՃԸ ",
      link: "https://prolifeblog24.ru/",
      source: "prolifeblog24.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=5edef6f80665afa59c35b19aaaa2b63e0463c8bb-8196260-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D5edef6f80665afa59c35b19aaaa2b63e0463c8bb-8196260-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://prolifeblog24.ru/wp-content/uploads/2022/11/000-21-345x230.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fprolifeblog24.ru%2Fwp-content%2Fuploads%2F2022%2F11%2F000-21-345x230.jpg",
        height: 230,
        width: 345,
      },
    },
    {
      title:
        "Купить Кофеварка Centek CT-1141 в Бишкеке - интернет-магазин Sulpak",
      snippet: "Стильное и современное решение на вашей кухне ",
      link: "https://www.sulpak.kg/g/kofevarki_centek_ct_1141",
      source: "sulpak.kg",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=56c5cc520121d149b344567135b34accea378ed3-5239765-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D56c5cc520121d149b344567135b34accea378ed3-5239765-images-thumbs",
        height: 125,
        width: 150,
      },
      original_image: {
        link: "https://object.pscloud.io/cms/cms/Uploads/5233.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fobject.pscloud.io%2Fcms%2Fcms%2FUploads%2F5233.jpg",
        height: 800,
        width: 960,
      },
    },
    {
      title: "Великий чайный путь Tea Road - Страница 309",
      snippet: "Напитки, которые заменят кофе по утрам. ",
      link: "https://www.tearoad.ru/page/309/",
      source: "tearoad.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=d1c084cb3861675fb2daefa79902a1f163deecdc-7763602-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dd1c084cb3861675fb2daefa79902a1f163deecdc-7763602-images-thumbs",
        height: 93,
        width: 150,
      },
      original_image: {
        link: "https://www.tearoad.ru/wp-content/uploads/2019/03/1-5.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fwww.tearoad.ru%2Fwp-content%2Fuploads%2F2019%2F03%2F1-5.jpg",
        height: 498,
        width: 797,
      },
    },
    {
      title:
        'Нетаниягу: "Мы не намерены извиняться за судебную реформу, нас не напугают" ► Последние новости',
      snippet: "Тверская область: ввозили торф из Литвы, кофе из Бразилии ",
      link: "https://vsenovosti.life/news/netaniyagu-my-ne-namereny-izvinyatsya-za/13292299",
      source: "vsenovosti.life",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=0fb7cf2e804438c2aae8a645338dae6e072b6344-7759147-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D0fb7cf2e804438c2aae8a645338dae6e072b6344-7759147-images-thumbs",
        height: 96,
        width: 150,
      },
      original_image: {
        link: "https://vsenovosti.life/storage/thumbs_400/img/2023/1/16/13292304_qhj.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fvsenovosti.life%2Fstorage%2Fthumbs_400%2Fimg%2F2023%2F1%2F16%2F13292304_qhj.jpg",
        height: 258,
        width: 400,
      },
    },
    {
      title: "Михаил Василихин ВКонтакте",
      snippet: "Михаил Василихин ",
      link: "https://vk.com/volmen888",
      source: "vk.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=8c13d5a95c27112a754074b4177404aa30c13b73-7766812-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D8c13d5a95c27112a754074b4177404aa30c13b73-7766812-images-thumbs",
        height: 84,
        width: 150,
      },
      original_image: {
        link: "https://sun6-22.userapi.com/3JHLQtGXBKq4vZPHngCTTtrf4k3KbjDL9zVSdA/qL76Jx_ibTA.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun6-22.userapi.com%2F3JHLQtGXBKq4vZPHngCTTtrf4k3KbjDL9zVSdA%2FqL76Jx_ibTA.jpg",
        height: 450,
        width: 800,
      },
    },
    {
      title: "Готовый бизнес купить в Беларуси",
      snippet: "ПРОДАМ кофе-поинт в живом бизнес-центре ",
      link: "https://www.kufar.by/l/gotovyj-biznes?sort=lst.d",
      source: "kufar.by",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=ae239b287fbe2b972c9251307a5642b7b9957ca9-9146551-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dae239b287fbe2b972c9251307a5642b7b9957ca9-9146551-images-thumbs",
        height: 84,
        width: 150,
      },
      original_image: {
        link: "https://yams.kufar.by/api/v1/kufar-ads/images/96/9669303569.jpg?rule=list_thumbs_2x",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fyams.kufar.by%2Fapi%2Fv1%2Fkufar-ads%2Fimages%2F96%2F9669303569.jpg%3Frule%3Dlist_thumbs_2x",
        height: 394,
        width: 700,
      },
    },
    {
      title: "Готовый бизнес и оборудование купить в Ушачах",
      snippet: "Минск, Центральный. ",
      link: "https://www.kufar.by/l/r~ushachi/gotovyj-biznes-i-oborudovanie",
      source: "kufar.by",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=ae239b287fbe2b972c9251307a5642b7b9957ca9-9146551-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dae239b287fbe2b972c9251307a5642b7b9957ca9-9146551-images-thumbs",
        height: 84,
        width: 150,
      },
      original_image: {
        link: "https://yams.kufar.by/api/v1/kufar-ads/images/96/9669303569.jpg?rule=list_thumbs_2x",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fyams.kufar.by%2Fapi%2Fv1%2Fkufar-ads%2Fimages%2F96%2F9669303569.jpg%3Frule%3Dlist_thumbs_2x",
        height: 394,
        width: 700,
      },
    },
    {
      title: "ПРОДАМ кофе-поинт в живом бизнес-центре - Барахолка onliner.by",
      snippet: "ПРОДАМ кофе-поинт в живом бизнес-центре ",
      link: "https://baraholka.onliner.by/viewtopic.php?t=25550996",
      source: "baraholka.onliner.by",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=d7ac5b28beb10a9cef1ef0cbb23378995411b811-9181172-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dd7ac5b28beb10a9cef1ef0cbb23378995411b811-9181172-images-thumbs",
        height: 84,
        width: 150,
      },
      original_image: {
        link: "https://content.onliner.by/fleamarket/1616995/800x800/afb76b022c056ada2c190ef25a087735.jpeg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fcontent.onliner.by%2Ffleamarket%2F1616995%2F800x800%2Fafb76b022c056ada2c190ef25a087735.jpeg",
        height: 450,
        width: 800,
      },
    },
    {
      title: '🏹 " Моё. - Видео ВКонтакте',
      snippet: "☭ Джага-Джага. ",
      link: "https://vk.com/video107364321_456239932",
      source: "vk.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=17a46de116d12ce850cfacd2d842aebb45eadcd7-9151019-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D17a46de116d12ce850cfacd2d842aebb45eadcd7-9151019-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://sun6-23.userapi.com/ZbSMdBmQENllWWWi5VihrXx-sDXrp7qiCxWqbQ/oKPcPz2QrmI.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun6-23.userapi.com%2FZbSMdBmQENllWWWi5VihrXx-sDXrp7qiCxWqbQ%2FoKPcPz2QrmI.jpg",
        height: 240,
        width: 320,
      },
    },
    {
      title: "Светлана Жукова, Самара, Россия ВКонтакте",
      snippet: "Светлана Жукова, 04.07.1978, Самара ",
      link: "https://top-profile.com/svetlana-zhukova/308285182/",
      source: "top-profile.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=46c10712742fc06f163f953b44e8eeb6069654f5-9101109-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D46c10712742fc06f163f953b44e8eeb6069654f5-9101109-images-thumbs",
        height: 84,
        width: 150,
      },
      original_image: {
        link: "https://sun9-50.userapi.com/impf/c627722/v627722182/30c57/XYWLSEYdtb4.jpg?size=213x120&quality=96&sign=4fae679c5c06f03e135cb7953e94704b&c_uniq_tag=zEJne2krJAy8_b7_vPAtU86K6_Y5pThbLaa9cnjp500&type=album",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun9-50.userapi.com%2Fimpf%2Fc627722%2Fv627722182%2F30c57%2FXYWLSEYdtb4.jpg%3Fsize%3D213x120%26quality%3D96%26sign%3D4fae679c5c06f03e135cb7953e94704b%26c_uniq_tag%3DzEJne2krJAy8_b7_vPAtU86K6_Y5pThbLaa9cnjp500%26type%3Dalbum",
        height: 120,
        width: 213,
      },
    },
    {
      title:
        "Тверская область: ввозили торф из Литвы, кофе из Бразилии. Новости Твери и городов Тверской области сегодня - Afanasy.biz - Твер",
      snippet: "Тверская область: ввозили торф из Литвы, кофе из Бразилии ",
      link: "https://www.afanasy.biz/news/economy/205730",
      source: "afanasy.biz",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=0f6536ab3ff1b189e9d42e18a8d639fd6a75aec4-8356639-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D0f6536ab3ff1b189e9d42e18a8d639fd6a75aec4-8356639-images-thumbs",
        height: 96,
        width: 150,
      },
      original_image: {
        link: "https://285800.selcdn.ru/upload-media/iblock/ceb/cebaa98650f028f1813e95138deef1b2/23385e92b74f080850b0c94103f985cb.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2F285800.selcdn.ru%2Fupload-media%2Fiblock%2Fceb%2Fcebaa98650f028f1813e95138deef1b2%2F23385e92b74f080850b0c94103f985cb.jpg",
        height: 724,
        width: 1123,
      },
    },
    {
      title:
        "Тверская область: ввозили торф из Литвы, кофе из Бразилии - новости Торжка",
      snippet:
        "Тверская область: ввозили торф из Литвы, кофе из Бразилии - новости Торжка ",
      link: "https://torzhok-gid.ru/news/ekonomika/tverskaya-oblast-vvozili-torf-iz-litvy-kofe-iz-brazilii.htm",
      source: "torzhok-gid.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=0f6536ab3ff1b189e9d42e18a8d639fd6a75aec4-8356639-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D0f6536ab3ff1b189e9d42e18a8d639fd6a75aec4-8356639-images-thumbs",
        height: 96,
        width: 150,
      },
      original_image: {
        link: "https://res.cloudinary.com/ddhklg6ze/image/upload/xtffpsjxodx6rsfsg9vp",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fres.cloudinary.com%2Fddhklg6ze%2Fimage%2Fupload%2Fxtffpsjxodx6rsfsg9vp",
        height: 724,
        width: 1123,
      },
    },
    {
      title:
        "Тверская область: ввозили торф из Литвы, кофе из Бразилии - новости Твери",
      snippet: "Новости Твери, 16 января. ",
      link: "https://tver-gid.ru/news/ekonomika/tverskaya-oblast-vvozili-torf-iz-litvy-kofe-iz-brazilii.htm",
      source: "tver-gid.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=0f6536ab3ff1b189e9d42e18a8d639fd6a75aec4-8356639-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D0f6536ab3ff1b189e9d42e18a8d639fd6a75aec4-8356639-images-thumbs",
        height: 96,
        width: 150,
      },
      original_image: {
        link: "https://res.cloudinary.com/dq2vt8azs/image/upload/lhofaxlobtbprclobs5u",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fres.cloudinary.com%2Fdq2vt8azs%2Fimage%2Fupload%2Flhofaxlobtbprclobs5u",
        height: 724,
        width: 1123,
      },
    },
    {
      title:
        "Тверская область: ввозили торф из Литвы, кофе из Бразилии. Ростов - горячие новости часа",
      link: "https://29ru.net/rostov/340355463/",
      source: "29ru.net",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=0f6536ab3ff1b189e9d42e18a8d639fd6a75aec4-8356639-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D0f6536ab3ff1b189e9d42e18a8d639fd6a75aec4-8356639-images-thumbs",
        height: 96,
        width: 150,
      },
      original_image: {
        link: "https://285800.selcdn.ru/upload-media/iblock/ceb/cebaa98650f028f1813e95138deef1b2/23385e92b74f080850b0c94103f985cb.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2F285800.selcdn.ru%2Fupload-media%2Fiblock%2Fceb%2Fcebaa98650f028f1813e95138deef1b2%2F23385e92b74f080850b0c94103f985cb.jpg",
        height: 724,
        width: 1123,
      },
    },
    {
      title:
        "Кофе Варшавский Для одной чашечки напитка - 1,5 ложечки кофе мелкого или среднего помола, 0,5 стакана молока.. 2016 ВКонтакте",
      snippet: "COFFEE ROOM GUS-GUS (Минск) ",
      link: "https://vk.com/wall-129320913_9",
      source: "vk.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=eedd3f4aa1e122dbac012fd59dfa6232df8b481b-8497203-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Deedd3f4aa1e122dbac012fd59dfa6232df8b481b-8497203-images-thumbs",
        height: 120,
        width: 150,
      },
      original_image: {
        link: "https://sun9-80.userapi.com/impf/c837724/v837724392/5c22/_rSqqL6BQLo.jpg?size=1280x1024&quality=96&sign=a7a638a304fa3150c835f9d23b704b9e&c_uniq_tag=Qskc_GhIbWWeRvRuFp9qZ8wTGruw_d3sajPWPWdRHRc&type=album",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun9-80.userapi.com%2Fimpf%2Fc837724%2Fv837724392%2F5c22%2F_rSqqL6BQLo.jpg%3Fsize%3D1280x1024%26quality%3D96%26sign%3Da7a638a304fa3150c835f9d23b704b9e%26c_uniq_tag%3DQskc_GhIbWWeRvRuFp9qZ8wTGruw_d3sajPWPWdRHRc%26type%3Dalbum",
        height: 1024,
        width: 1280,
      },
    },
    {
      title: "Desserts Online food delivery in Almaty Order Now with Glovo",
      snippet: 'Кофейня "&Milk" ',
      link: "https://glovoapp.com/kz/en/almaty/restaurants_1/desserts_34783/",
      source: "glovoapp.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=13cc0209d1fd6585548ae8adb8d1da4b41698809-4557470-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D13cc0209d1fd6585548ae8adb8d1da4b41698809-4557470-images-thumbs",
        height: 66,
        width: 150,
      },
      original_image: {
        link: "https://res.cloudinary.com/glovoapp/w_351,h_156,c_fill,b_transparent,f_auto,q_auto:low,dpr_1.0/Stores/f9kat60bidm4y574wdhz",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fres.cloudinary.com%2Fglovoapp%2Fw_351%2Ch_156%2Cc_fill%2Cb_transparent%2Cf_auto%2Cq_auto%3Alow%2Cdpr_1.0%2FStores%2Ff9kat60bidm4y574wdhz",
        height: 156,
        width: 351,
      },
    },
    {
      title: "Смоленская обл. - imag.one ► Последние новости",
      snippet: "Все новости, где упоминается Смоленская обл. ",
      link: "https://imag.one/news/locations/oblast-smolenskaya",
      source: "imag.one",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=0fb7cf2e804438c2aae8a645338dae6e072b6344-7759147-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D0fb7cf2e804438c2aae8a645338dae6e072b6344-7759147-images-thumbs",
        height: 96,
        width: 150,
      },
      original_image: {
        link: "https://imag.one/storage/thumbs_400/img/2023/1/16/13292304_qhj.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimag.one%2Fstorage%2Fthumbs_400%2Fimg%2F2023%2F1%2F16%2F13292304_qhj.jpg",
        height: 258,
        width: 400,
      },
    },
    {
      title:
        'Квадратный метр "вторички" перестал дорожать в Тверской области. Новости Твери и городов Тверской области сегодня - Afanasy.biz',
      link: "https://www.afanasy.biz/news/economy/203161",
      source: "afanasy.biz",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=22cdc5adf18067d0da646c5922a3b32a46a33558-8497242-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D22cdc5adf18067d0da646c5922a3b32a46a33558-8497242-images-thumbs",
        height: 96,
        width: 150,
      },
      original_image: {
        link: "https://285800.selcdn.ru/upload-media/resize_cache/356986/88ec5dbc6a7d011bf1791df88f3e367d/iblock/b24/b245f5d7fc92519a80b76750e53e65c1/db5e997cec8957a4daf99230bcf1d9cd.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2F285800.selcdn.ru%2Fupload-media%2Fresize_cache%2F356986%2F88ec5dbc6a7d011bf1791df88f3e367d%2Fiblock%2Fb24%2Fb245f5d7fc92519a80b76750e53e65c1%2Fdb5e997cec8957a4daf99230bcf1d9cd.jpg",
        height: 213,
        width: 330,
      },
    },
    {
      title:
        "В Тверской области в 2022 году более 500 раз проверяли почву на плодородие ► Последние новости",
      link: "https://vsenovosti.life/news/v-tverskoy-oblasti-v-2022-godu-bolee-500-raz/13299368",
      source: "vsenovosti.life",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=0fb7cf2e804438c2aae8a645338dae6e072b6344-7759147-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D0fb7cf2e804438c2aae8a645338dae6e072b6344-7759147-images-thumbs",
        height: 96,
        width: 150,
      },
      original_image: {
        link: "https://vsenovosti.life/storage/thumbs_400/img/2023/1/16/13292304_qhj.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fvsenovosti.life%2Fstorage%2Fthumbs_400%2Fimg%2F2023%2F1%2F16%2F13292304_qhj.jpg",
        height: 258,
        width: 400,
      },
    },
    {
      title:
        "Влияние кофе на печень, поджелудочную железу, желчный пузырь, можно ли пить кофе при циррозе печени",
      snippet: "Можно ли пить кофе при гепатите В и С ",
      link: "https://pechen-help.ru/gepatolog/dieta-s-gepatitom-s",
      source: "pechen-help.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=05465b63aa0a45f93b8f1bb4a8466a935fd83661-7950464-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D05465b63aa0a45f93b8f1bb4a8466a935fd83661-7950464-images-thumbs",
        height: 106,
        width: 150,
      },
      original_image: {
        link: "https://pechen-help.ru/wp-content/uploads/2020/12/img_16076419109078-1-1024x576.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fpechen-help.ru%2Fwp-content%2Fuploads%2F2020%2F12%2Fimg_16076419109078-1-1024x576.jpg",
        height: 213,
        width: 300,
      },
    },
    {
      title: "Десерты Доставка еды в г. Алматы Заказывайте онлайн с Glovo",
      link: "https://glovoapp.com/kz/ru/almaty/restorany_1/deserty_34783/",
      source: "glovoapp.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=13cc0209d1fd6585548ae8adb8d1da4b41698809-4557470-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D13cc0209d1fd6585548ae8adb8d1da4b41698809-4557470-images-thumbs",
        height: 66,
        width: 150,
      },
      original_image: {
        link: "https://res.cloudinary.com/glovoapp/w_351,h_156,c_fill,b_transparent,f_auto,q_auto:low,dpr_1.0/Stores/f9kat60bidm4y574wdhz",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fres.cloudinary.com%2Fglovoapp%2Fw_351%2Ch_156%2Cc_fill%2Cb_transparent%2Cf_auto%2Cq_auto%3Alow%2Cdpr_1.0%2FStores%2Ff9kat60bidm4y574wdhz",
        height: 156,
        width: 351,
      },
    },
    {
      title:
        "Купить с кэшбэком Кофе растворимый BUSHIDO Original 100 гр BUSHIDO 110499521 за 749 ₽ в интернет-магазине Wildberries",
      snippet:
        "Кофе растворимый BUSHIDO Original 100 гр BUSHIDO 110499521 купить за 749&nbsp;₽ в интернет-магазине Wildberries. ",
      link: "https://smartcart.megabonus.com/item/83474627-kofe-rastvorimyy-bushido-original-100-gr-bushido-110499521-kupit-za-749-v",
      source: "smartcart.megabonus.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=5a5b64846d32c965006fb62deb09aa99949fbc14-5485045-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D5a5b64846d32c965006fb62deb09aa99949fbc14-5485045-images-thumbs",
        height: 150,
        width: 112,
      },
      original_image: {
        link: "https://basket-07.wb.ru/vol1104/part110499/110499521/images/c246x328/4.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fbasket-07.wb.ru%2Fvol1104%2Fpart110499%2F110499521%2Fimages%2Fc246x328%2F4.jpg",
        height: 328,
        width: 246,
      },
    },
    {
      title:
        "Растворимый кофе Jacobs 3 в 1 Крепкий (кофе Якобс крепкий 3 в 1), в стиках Jacobs 77813201 купить в интернет-магазине Wildberrie",
      snippet:
        "Растворимый кофе Jacobs 3 в 1 Крепкий (кофе Якобс крепкий 3 в 1), в стиках Jacobs. ",
      link: "https://kz.wildberries.ru/catalog/77813201/detail.aspx",
      source: "kz.wildberries.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=0f922041cf64c683e9851d45e4732873e314f916-8343339-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D0f922041cf64c683e9851d45e4732873e314f916-8343339-images-thumbs",
        height: 150,
        width: 112,
      },
      original_image: {
        link: "https://images.wbstatic.net/c246x328/new/77810000/77813201-5.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimages.wbstatic.net%2Fc246x328%2Fnew%2F77810000%2F77813201-5.jpg",
        height: 328,
        width: 246,
      },
    },
    {
      title:
        "Растворимый кофе Jacobs 3 в 1 Крепкий Jacobs 77813201 купить в интернет-магазине Wildberries",
      snippet: "Растворимый кофе Jacobs 3 в 1 Крепкий Jacobs. ",
      link: "https://www.wildberries.ru/catalog/77813201/detail.aspx",
      source: "wildberries.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=0f922041cf64c683e9851d45e4732873e314f916-8343339-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D0f922041cf64c683e9851d45e4732873e314f916-8343339-images-thumbs",
        height: 150,
        width: 112,
      },
      original_image: {
        link: "https://basket-05.wb.ru/vol778/part77813/77813201/images/c246x328/5.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fbasket-05.wb.ru%2Fvol778%2Fpart77813%2F77813201%2Fimages%2Fc246x328%2F5.jpg",
        height: 328,
        width: 246,
      },
    },
    {
      title:
        "Растворимый кофе Jacobs 3 в 1 Крепкий Jacobs 77813201 купить в интернет-магазине Wildberries",
      link: "https://uz.wildberries.ru/catalog/77813201/detail.aspx",
      source: "uz.wildberries.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=0f922041cf64c683e9851d45e4732873e314f916-8343339-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D0f922041cf64c683e9851d45e4732873e314f916-8343339-images-thumbs",
        height: 150,
        width: 112,
      },
      original_image: {
        link: "https://basket-05.wb.ru/vol778/part77813/77813201/images/c246x328/5.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fbasket-05.wb.ru%2Fvol778%2Fpart77813%2F77813201%2Fimages%2Fc246x328%2F5.jpg",
        height: 328,
        width: 246,
      },
    },
    {
      title:
        "Растворимый кофе Jacobs 3 в 1 Классика Jacobs 77808726 купить в интернет-магазине Wildberries",
      link: "https://uz.wildberries.ru/catalog/77808726/detail.aspx",
      source: "uz.wildberries.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=0f922041cf64c683e9851d45e4732873e314f916-8343339-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D0f922041cf64c683e9851d45e4732873e314f916-8343339-images-thumbs",
        height: 150,
        width: 112,
      },
      original_image: {
        link: "https://basket-05.wb.ru/vol778/part77808/77808726/images/c246x328/5.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fbasket-05.wb.ru%2Fvol778%2Fpart77808%2F77808726%2Fimages%2Fc246x328%2F5.jpg",
        height: 328,
        width: 246,
      },
    },
    {
      title:
        "Кофе растворимый BUSHIDO Original 100 гр BUSHIDO 119150475 купить в интернет-магазине Wildberries",
      snippet: "Кофе растворимый BUSHIDO Original 100 гр BUSHIDO. ",
      link: "https://www.wildberries.ru/catalog/119150475/detail.aspx",
      source: "wildberries.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=a6c97a52869f92b6b6762bca0555f5b9ed13ca0a-7149282-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Da6c97a52869f92b6b6762bca0555f5b9ed13ca0a-7149282-images-thumbs",
        height: 150,
        width: 112,
      },
      original_image: {
        link: "https://basket-09.wb.ru/vol1191/part119150/119150475/images/c246x328/4.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fbasket-09.wb.ru%2Fvol1191%2Fpart119150%2F119150475%2Fimages%2Fc246x328%2F4.jpg",
        height: 328,
        width: 246,
      },
    },
    {
      title:
        "cutting edge_elementary_revision Baamboozle - Baamboozle The Most Fun Classroom Games!",
      snippet: "I didn't buy coffee, I thought we had. ",
      link: "https://www.baamboozle.com/classic/544656/2",
      source: "baamboozle.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=c3518318b44b47046535207d34859eabed5e4663-8400759-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dc3518318b44b47046535207d34859eabed5e4663-8400759-images-thumbs",
        height: 93,
        width: 150,
      },
      original_image: {
        link: "https://media.baamboozle.com/uploads/images/199265/1624389823_118747_url.jpeg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fmedia.baamboozle.com%2Fuploads%2Fimages%2F199265%2F1624389823_118747_url.jpeg",
        height: 750,
        width: 1200,
      },
    },
    {
      title: "Напитки, которые вредны для зубов - Про Препарат",
      link: "https://propreparat.ru/napitki-kotorye-vredny-dlya-zubov/",
      source: "propreparat.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=1331dc57235f18b0210f6a035c0bf427a72f8570-7947996-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D1331dc57235f18b0210f6a035c0bf427a72f8570-7947996-images-thumbs",
        height: 104,
        width: 150,
      },
      original_image: {
        link: "https://propreparat.ru/wp-content/uploads/2022/11/Kofe.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fpropreparat.ru%2Fwp-content%2Fuploads%2F2022%2F11%2FKofe.jpg",
        height: 847,
        width: 1212,
      },
    },
    {
      title: "TheKing of hisworld (@LECK45F04Uaaw0P) Twitter",
      link: "https://twitter.com/leck45f04uaaw0p?lang=no",
      source: "twitter.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=c3518318b44b47046535207d34859eabed5e4663-8400759-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dc3518318b44b47046535207d34859eabed5e4663-8400759-images-thumbs",
        height: 93,
        width: 150,
      },
      original_image: {
        link: "https://pbs.twimg.com/media/D9MHUYPUEAAYUBj.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FD9MHUYPUEAAYUBj.jpg",
        height: 750,
        width: 1200,
      },
    },
    {
      title:
        "cutting edge_elementary_revision Baamboozle - Baamboozle The Most Fun Classroom Games!",
      link: "https://www.baamboozle.com/game/544656",
      source: "baamboozle.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=c3518318b44b47046535207d34859eabed5e4663-8400759-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dc3518318b44b47046535207d34859eabed5e4663-8400759-images-thumbs",
        height: 93,
        width: 150,
      },
      original_image: {
        link: "https://media.baamboozle.com/uploads/images/199265/1624389823_118747_url.jpeg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fmedia.baamboozle.com%2Fuploads%2Fimages%2F199265%2F1624389823_118747_url.jpeg",
        height: 750,
        width: 1200,
      },
    },
    {
      title:
        'TheKing of hisworld on Twitter: "Кофе-это не напиток. Это длинные уютные разговоры, приятные встречи и милые свидания; это бодро',
      snippet: "Кофе-это не напиток. ",
      link: "https://twitter.com/LECK45F04Uaaw0P/status/1140263195673632774",
      source: "twitter.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=c3518318b44b47046535207d34859eabed5e4663-8400759-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dc3518318b44b47046535207d34859eabed5e4663-8400759-images-thumbs",
        height: 93,
        width: 150,
      },
      original_image: {
        link: "https://pbs.twimg.com/media/D9MHUYPUEAAYUBj?format=jpg&name=medium",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FD9MHUYPUEAAYUBj%3Fformat%3Djpg%26name%3Dmedium",
        height: 750,
        width: 1200,
      },
    },
    {
      title: "Кофе защитит от цирроза печени",
      snippet: "Кофе защитит от цирроза печени ",
      link: "https://www.coopinhal.com/kofe-zashhitit-ot-cirroza-pecheni-4/",
      source: "coopinhal.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=03b336e64fac6bf246a94a86c1ac87eb756d999f-8310914-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D03b336e64fac6bf246a94a86c1ac87eb756d999f-8310914-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://www.coopinhal.com/wp-content/uploads/2017/01/image.png",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fwww.coopinhal.com%2Fwp-content%2Fuploads%2F2017%2F01%2Fimage.png",
        height: 960,
        width: 1280,
      },
    },
    {
      title:
        "Скачать обои кофе, чашка, сахар, напиток, раздел еда в разрешении 1600x1200",
      link: "https://www.goodfon.ru/download/kofe-napitok-sahar-chashka/1600x1200/",
      source: "goodfon.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=882c3a29f9c2610108aad4023b6985d5c4527392-8485393-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D882c3a29f9c2610108aad4023b6985d5c4527392-8485393-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://img1.goodfon.ru/original/1600x1200/2/1e/kofe-napitok-sahar-chashka.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimg1.goodfon.ru%2Foriginal%2F1600x1200%2F2%2F1e%2Fkofe-napitok-sahar-chashka.jpg",
        height: 1200,
        width: 1600,
      },
    },
    {
      title:
        "cutting edge_elementary_revision Baamboozle - Baamboozle The Most Fun Classroom Games!",
      snippet: "cutting edge_elementary_revision ",
      link: "https://www.baamboozle.com/study/544656",
      source: "baamboozle.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=c3518318b44b47046535207d34859eabed5e4663-8400759-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dc3518318b44b47046535207d34859eabed5e4663-8400759-images-thumbs",
        height: 93,
        width: 150,
      },
      original_image: {
        link: "https://media.baamboozle.com/uploads/images/199265/1624389823_118747_url.jpeg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fmedia.baamboozle.com%2Fuploads%2Fimages%2F199265%2F1624389823_118747_url.jpeg",
        height: 750,
        width: 1200,
      },
    },
    {
      title:
        "Download wallpaper coffee, Cup, sugar, drink, section food in resolution 640x960",
      snippet: "GoodFon.com - Free Wallpapers, download. ",
      link: "https://www.goodfon.com/download/kofe-napitok-sahar-chashka/640x960/",
      source: "goodfon.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=9ded93cc8b727fc599b0cfd6a7c95598bff38150-8506348-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D9ded93cc8b727fc599b0cfd6a7c95598bff38150-8506348-images-thumbs",
        height: 150,
        width: 99,
      },
      original_image: {
        link: "https://img1.goodfon.com/original/640x960/2/1e/kofe-napitok-sahar-chashka.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimg1.goodfon.com%2Foriginal%2F640x960%2F2%2F1e%2Fkofe-napitok-sahar-chashka.jpg",
        height: 960,
        width: 640,
      },
    },
    {
      title:
        "Врач Соломатина предупредила граждан в РФ об опасности употребления кофе при COVID-19 Solenka.info - Мировые новости и светская",
      snippet:
        "Врач Соломатина предупредила граждан в РФ об опасности употребления кофе при COVID-19 - Solenka.info - Мировые новости и светская хроника шоу-бизнеса ",
      link: "https://solenka.info/vrach-solomatina-predupredila-grazhdan-v-rf-ob-opasnosti-upotreblenija-kofe-pri-covid-19.html",
      source: "solenka.info",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=17509639770cc345e3b33b90762a277063c53cf3-6947135-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D17509639770cc345e3b33b90762a277063c53cf3-6947135-images-thumbs",
        height: 93,
        width: 150,
      },
      original_image: {
        link: "https://solenka.info/wp-content/uploads/2021/11/9-11.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsolenka.info%2Fwp-content%2Fuploads%2F2021%2F11%2F9-11.jpg",
        height: 661,
        width: 1066,
      },
    },
    {
      title: "Миниcтepcтвo Пpaвды paбoтoй зa Гипepмышлeниe / ЛАЙФХАК",
      link: "https://laifhak.ru/media/3x3/ministerstvo-pravdy-za-rabotoi-60d9b20c0ab7753d279e8150",
      source: "laifhak.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=06a0c6b2a65e28308823bf359b10f446372e45ed-5209794-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D06a0c6b2a65e28308823bf359b10f446372e45ed-5209794-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://avatars.dzeninfra.ru/get-zen_doc/5238100/pub_60d9b20c0ab7753d279e8150_60d9b3b65952c6703132b955/scale_1200",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.dzeninfra.ru%2Fget-zen_doc%2F5238100%2Fpub_60d9b20c0ab7753d279e8150_60d9b3b65952c6703132b955%2Fscale_1200",
        height: 768,
        width: 1024,
      },
    },
    {
      title:
        "Скачать обои кофе, чашка, сахар, напиток, раздел еда в разрешении 1024x768",
      link: "https://www.goodfon.ru/download/kofe-napitok-sahar-chashka/1024x768/",
      source: "goodfon.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=5ae039ff1aaa0c774e506bf79a5e0b56-5023418-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D5ae039ff1aaa0c774e506bf79a5e0b56-5023418-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://img1.goodfon.ru/original/1024x768/2/1e/kofe-napitok-sahar-chashka.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimg1.goodfon.ru%2Foriginal%2F1024x768%2F2%2F1e%2Fkofe-napitok-sahar-chashka.jpg",
        height: 768,
        width: 1024,
      },
    },
    {
      title:
        "Обсуждения развития сюжета игры МПиБ АРХИВ Стр.716 :: Между прошлым и будущим :: Дамский клуб LADY",
      link: "https://lady.webnice.ru/forum/viewtopic.php?t=23902&start=10725",
      source: "lady.webnice.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=085158a7c95786b6614c70bdfebc20d67603cc8e-7874410-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D085158a7c95786b6614c70bdfebc20d67603cc8e-7874410-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://www.vladtime.ru/uploads/posts/2015-12/1449646939_7.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fwww.vladtime.ru%2Fuploads%2Fposts%2F2015-12%2F1449646939_7.jpg",
        height: 768,
        width: 1024,
      },
    },
    {
      title:
        "Кофе растворимый - 50 ₽, купить онлайн. Осетинские пироги, Пятигорск",
      snippet: "Корзина. ",
      link: "https://amenu.ru/shop/01GK1MTT4NXRR5M01FFAN5QGSM/cat/01GK1SZXMJ1P2P7QC61P9XG0G9/product/01GK1T0E0KN187S826GDTKCSEH",
      source: "amenu.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=f5ed73789d8d139d0a3f2622467566ffc423c847-4012775-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Df5ed73789d8d139d0a3f2622467566ffc423c847-4012775-images-thumbs",
        height: 120,
        width: 150,
      },
      original_image: {
        link: "https://amenu.ru/images/e.081f24fc52c170a9a34dff3c509c164c.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Famenu.ru%2Fimages%2Fe.081f24fc52c170a9a34dff3c509c164c.jpg",
        height: 768,
        width: 960,
      },
    },
    {
      title:
        "MOS NEWS - онлайн издание, новости Москвы сегодня, новости России и Москвы",
      link: "https://vaomos.news/news/zhkkh_i_stroitelstvo/pokazaniya_elektroschetchikov_mozhno_peredat_v_mosenergosbyt_po_telefonu_v_avtomaticheskom_rezhime_?PAGEN_1=99",
      source: "vaomos.news",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=0694bb5c9222ca78ca4add0cc0b3b561-5483535-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D0694bb5c9222ca78ca4add0cc0b3b561-5483535-images-thumbs",
        height: 90,
        width: 150,
      },
      original_image: {
        link: "https://vaomos.news/upload/resize_cache/iblock/718/360_218_2/718f2d21e1317f3c2ea60f74a634dee2.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fvaomos.news%2Fupload%2Fresize_cache%2Fiblock%2F718%2F360_218_2%2F718f2d21e1317f3c2ea60f74a634dee2.jpg",
        height: 218,
        width: 360,
      },
    },
    {
      title: "Новости",
      link: "https://4girls.news/news/yuvao/?PAGEN_1=85&sort=show",
      source: "4girls.news",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2a00000179fe3ba6f29fe1de6665e2a717b6-4599934-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2a00000179fe3ba6f29fe1de6665e2a717b6-4599934-images-thumbs",
        height: 90,
        width: 150,
      },
      original_image: {
        link: "https://4girls.news/upload/resize_cache/iblock/ebd/360_218_2/ebd81ef8b264ce06e97e5fe5d5534d03.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2F4girls.news%2Fupload%2Fresize_cache%2Fiblock%2Febd%2F360_218_2%2Febd81ef8b264ce06e97e5fe5d5534d03.jpg",
        height: 218,
        width: 360,
      },
    },
    {
      title: "Методичний енерджайзер: 2016",
      link: "https://enerdgaizer.blogspot.com/2016/",
      source: "enerdgaizer.blogspot.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=a9d3b907f79c6eab6889cd6896d99c37e4954a1f-4282959-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Da9d3b907f79c6eab6889cd6896d99c37e4954a1f-4282959-images-thumbs",
        height: 120,
        width: 150,
      },
      original_image: {
        link: "https://1.bp.blogspot.com/-lBqWMX0iuaw/WAZhC7iuqaI/AAAAAAAAARs/UfVxj_9VPcUbbHsWK8Z5H3qpKEzyXee1gCLcB/s320/artleo.com-146853.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2F1.bp.blogspot.com%2F-lBqWMX0iuaw%2FWAZhC7iuqaI%2FAAAAAAAAARs%2FUfVxj_9VPcUbbHsWK8Z5H3qpKEzyXee1gCLcB%2Fs320%2Fartleo.com-146853.jpg",
        height: 256,
        width: 320,
      },
    },
    {
      title: "Душевный рассказ",
      link: "https://zen.yandex.ru/id/6210082eaedff8788d1bdb89",
      source: "zen.yandex.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=f0f808b4e4ded5ccd1bc904c15b8de72-5233165-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Df0f808b4e4ded5ccd1bc904c15b8de72-5233165-images-thumbs",
        height: 129,
        width: 150,
      },
      original_image: {
        link: "https://avatars.dzeninfra.ru/get-zen-logos/1520972/pub_6210082eaedff8788d1bdb89_62583c9b98a9b87a27d3e180/xxh",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.dzeninfra.ru%2Fget-zen-logos%2F1520972%2Fpub_6210082eaedff8788d1bdb89_62583c9b98a9b87a27d3e180%2Fxxh",
        height: 270,
        width: 312,
      },
    },
    {
      title:
        "Очень вкусно! Группа на OK.ru Вступай, читай, общайся в Одноклассниках!",
      link: "https://ok.ru/group/57303149183196/album/894381463004/930490756060?st.layer.cmd=PopLayerPhoto&st.layer.plc=groupNewPhotos&st.layer.src.p.albumId=894381463004&st.layer.photoId=930490756060&st.layer.type=GROUP&st.layer.src.p.groupId=57303149183196&st.layer.src.type=GROUP_ALBUM&st.cmd=anonymGroup&st.groupId=57303149183196",
      source: "ok.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2878166322eaf69dac21aaa53f7b2aa12fe110e2-8497133-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2878166322eaf69dac21aaa53f7b2aa12fe110e2-8497133-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://i.mycdn.me/i?r=AzGBqNaF5OQp2lMpnhRx4DEFJ2EQGaHPcEPZ9WV0Q7Bkk1yocoweiUJ-IQfliA4Qjz8",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fi.mycdn.me%2Fi%3Fr%3DAzGBqNaF5OQp2lMpnhRx4DEFJ2EQGaHPcEPZ9WV0Q7Bkk1yocoweiUJ-IQfliA4Qjz8",
        height: 244,
        width: 244,
      },
    },
    {
      title: "чашка FireStock - бесплатный фотосток. - страница 2",
      link: "https://www.firestock.ru/tag/chashka/page/2/",
      source: "firestock.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=f64369d2ac994352d04a46953f54e71442aee8e0-8548977-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Df64369d2ac994352d04a46953f54e71442aee8e0-8548977-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://www.firestock.ru/wp-content/uploads/2015/02/Dollarphotoclub_62567819-255x255.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fwww.firestock.ru%2Fwp-content%2Fuploads%2F2015%2F02%2FDollarphotoclub_62567819-255x255.jpg",
        height: 255,
        width: 255,
      },
    },
    {
      title: "IBOtoolbox Tracy Carter The KING of Herd",
      snippet: "The KING of Herd ",
      link: "http://ibotoolbox.com/mistracy39/pressrelease/The_KING_of_Herd?prid=612853",
      source: "ibotoolbox.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=eba453baa31cb56e542255980a7f0d4d390273d4-5365143-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Deba453baa31cb56e542255980a7f0d4d390273d4-5365143-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://www.dreamers.id/img_artikel/55ganodermacoffeethumb.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fwww.dreamers.id%2Fimg_artikel%2F55ganodermacoffeethumb.jpg",
        height: 450,
        width: 600,
      },
    },
    {
      title: "польза Archives - Page 31 of 41 - PolzaotVrachey.com",
      snippet: "10 Видов эфирных масел и их польза для здоровья ",
      link: "https://polzaotvrachey.com/tag/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%B0/page/31",
      source: "polzaotvrachey.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=1b84c6fbaba578b372d84ede70358cb7-4571539-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D1b84c6fbaba578b372d84ede70358cb7-4571539-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://polzaotvrachey.com/wp-content/uploads/2018/02/coffee-with-ganoderma-polza.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fpolzaotvrachey.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fcoffee-with-ganoderma-polza.jpg",
        height: 194,
        width: 259,
      },
    },
    {
      title: "кофе Archives - PolzaotVrachey.com",
      snippet:
        "Считается, что определенные типы диабета не могут быть до конца вылечены, но возможно... ",
      link: "https://polzaotvrachey.com/tag/%D0%BA%D0%BE%D1%84%D0%B5",
      source: "polzaotvrachey.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=1b84c6fbaba578b372d84ede70358cb7-4571539-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D1b84c6fbaba578b372d84ede70358cb7-4571539-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://polzaotvrachey.com/wp-content/uploads/2018/02/coffee-with-ganoderma-polza.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fpolzaotvrachey.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fcoffee-with-ganoderma-polza.jpg",
        height: 194,
        width: 259,
      },
    },
    {
      title: "Ganoderma Coffee, Minuman Kopi Asal China yang Nikmat dan Sehat",
      snippet:
        "Ganoderma Coffee, Minuman Kopi Asal China yang Nikmat dan Sehat ",
      link: "https://gayahidup.dreamers.id/article/47008/ganoderma-coffee-minuman-kopi-asal-china-yang-nikmat-dan-sehat",
      source: "gayahidup.dreamers.id",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=eba453baa31cb56e542255980a7f0d4d390273d4-5365143-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Deba453baa31cb56e542255980a7f0d4d390273d4-5365143-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://www.dreamers.id/img_artikel/55ganodermacoffeethumb.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fwww.dreamers.id%2Fimg_artikel%2F55ganodermacoffeethumb.jpg",
        height: 450,
        width: 600,
      },
    },
    {
      title: "Negara Penghasil Kopi Nomor Satu Di Dunia - DerivBinary.com",
      snippet:
        "Jenis kopi yang paling populer di negeri ini adalah cappuccino. ",
      link: "https://derivbinary.com/tips-trading/986/",
      source: "derivbinary.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=eba453baa31cb56e542255980a7f0d4d390273d4-5365143-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Deba453baa31cb56e542255980a7f0d4d390273d4-5365143-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://masnid.com/wp-content/uploads/2019/12/kopi-china.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fmasnid.com%2Fwp-content%2Fuploads%2F2019%2F12%2Fkopi-china.jpg",
        height: 450,
        width: 600,
      },
    },
    {
      title: "خانواده",
      link: "https://khanevede.bigblog.ir/",
      source: "khanevede.bigblog.ir",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2a00000179f22e6c3013c8dff44689fb4ae2-4564518-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2a00000179f22e6c3013c8dff44689fb4ae2-4564518-images-thumbs",
        height: 91,
        width: 150,
      },
      original_image: {
        link: "https://delta.ir/mag/wp-content/uploads/2019/11/%D9%82%D9%87%D9%88%D9%87-%DA%AF%D8%A7%D9%86%D9%88%D8%AF%D8%B1%D9%85%D8%A7-1.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fdelta.ir%2Fmag%2Fwp-content%2Fuploads%2F2019%2F11%2F%25D9%2582%25D9%2587%25D9%2588%25D9%2587-%25DA%25AF%25D8%25A7%25D9%2586%25D9%2588%25D8%25AF%25D8%25B1%25D9%2585%25D8%25A7-1.jpg",
        height: 366,
        width: 600,
      },
    },
    {
      title: "кофе - PolzaotVrachey.com",
      link: "https://polzaotvrachey.com/tag/%D0%BA%D0%BE%D1%84%D0%B5/feed",
      source: "polzaotvrachey.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=1b84c6fbaba578b372d84ede70358cb7-4571539-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D1b84c6fbaba578b372d84ede70358cb7-4571539-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://polzaotvrachey.com/wp-content/uploads/2018/02/coffee-with-ganoderma-polza.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fpolzaotvrachey.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fcoffee-with-ganoderma-polza.jpg",
        height: 194,
        width: 259,
      },
    },
    {
      title:
        "Ученые заявили о пользе растворимого кофе для организма ► Последние новости",
      snippet:
        "Употребление растворимого кофе оказывает положительное влияние на работу организма человека, заявили ученые из Национального института рака США и Северо-Западного ▹ Все подробности на сайте imag.one ",
      link: "https://imag.one/news/uchenye-zayavili-o-polze-rastvorimogo-kofe/9455639",
      source: "imag.one",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=8ebc74e27c44f24e8cd420f98f160c922ef91a5d-8425552-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D8ebc74e27c44f24e8cd420f98f160c922ef91a5d-8425552-images-thumbs",
        height: 72,
        width: 150,
      },
      original_image: {
        link: "https://imag.one/storage/img/2021/8/13/9455639_rmr.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimag.one%2Fstorage%2Fimg%2F2021%2F8%2F13%2F9455639_rmr.jpg",
        height: 485,
        width: 1000,
      },
    },
    {
      title: "Armenia News",
      snippet: "Why you should drink less coffee during periods. ",
      link: "https://news.am/eng/news/allregions/allthemes/2018/02/02",
      source: "news.am",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=e4496a2431213b54ef849208c89ad6fa-5827144-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3De4496a2431213b54ef849208c89ad6fa-5827144-images-thumbs",
        height: 80,
        width: 150,
      },
      original_image: {
        link: "https://med.news.am/static/news/s/2018/02/16986.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fmed.news.am%2Fstatic%2Fnews%2Fs%2F2018%2F02%2F16986.jpg",
        height: 160,
        width: 300,
      },
    },
    {
      title:
        "Why you should drink less coffee during periods NEWS.am Medicine - All about health and medicine",
      snippet: "Why you should drink less coffee during periods ",
      link: "https://med.news.am/eng/print/16986/",
      source: "med.news.am",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2bde759e3cddc55b15d873df197090a76047021a-7453279-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2bde759e3cddc55b15d873df197090a76047021a-7453279-images-thumbs",
        height: 80,
        width: 150,
      },
      original_image: {
        link: "https://med.news.am/static/news/b/2018/02/16986.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fmed.news.am%2Fstatic%2Fnews%2Fb%2F2018%2F02%2F16986.jpg",
        height: 350,
        width: 650,
      },
    },
    {
      title: "Առողջություն",
      snippet: "Архивы ԱՌՈՂՋՈՒԹՅՈՒՆ Страница 34 из 35 ՏԵՂԵԿԱՏՈՒ ",
      link: "https://www.hmong.press/images/%D4%B1%D5%BC%D5%B8%D5%B2%D5%BB%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6",
      source: "hmong.press",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=96cb02ee56618eee5f9d39f217894fa2-5233313-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D96cb02ee56618eee5f9d39f217894fa2-5233313-images-thumbs",
        height: 76,
        width: 150,
      },
      original_image: {
        link: "https://texekatu.ru/wp-content/uploads/2019/01/16986-650x330.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Ftexekatu.ru%2Fwp-content%2Fuploads%2F2019%2F01%2F16986-650x330.jpg",
        height: 330,
        width: 650,
      },
    },
    {
      title: "Методичний енерджайзер: Запрошуємо на каванар.",
      link: "https://enerdgaizer.blogspot.com/2016/10/blog-post.html",
      source: "enerdgaizer.blogspot.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=5ce75d11fdb440393c99254ccd1a8c47-5869219-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D5ce75d11fdb440393c99254ccd1a8c47-5869219-images-thumbs",
        height: 78,
        width: 150,
      },
      original_image: {
        link: "https://1.bp.blogspot.com/-lBqWMX0iuaw/WAZhC7iuqaI/AAAAAAAAARs/UfVxj_9VPcUbbHsWK8Z5H3qpKEzyXee1gCLcB/w1200-h630-p-k-no-nu/artleo.com-146853.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2F1.bp.blogspot.com%2F-lBqWMX0iuaw%2FWAZhC7iuqaI%2FAAAAAAAAARs%2FUfVxj_9VPcUbbHsWK8Z5H3qpKEzyXee1gCLcB%2Fw1200-h630-p-k-no-nu%2Fartleo.com-146853.jpg",
        height: 630,
        width: 1200,
      },
    },
    {
      title:
        "Why you should drink less coffee during periods NEWS.am Medicine - All about health and medicine",
      link: "https://med.news.am/eng/news/16986/why-you-should-drink-less-coffee-during-periods.html",
      source: "med.news.am",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2bde759e3cddc55b15d873df197090a76047021a-7453279-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2bde759e3cddc55b15d873df197090a76047021a-7453279-images-thumbs",
        height: 80,
        width: 150,
      },
      original_image: {
        link: "https://med.news.am/static/news/b/2018/02/16986.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fmed.news.am%2Fstatic%2Fnews%2Fb%2F2018%2F02%2F16986.jpg",
        height: 350,
        width: 650,
      },
    },
    {
      title: "Архивы ԱՌՈՂՋՈՒԹՅՈՒՆ - Страница 2 из 3 - ОЧЕНЪ КЛЁВО",
      snippet: "ԱՌՈՂՋՈՒԹՅՈՒՆ ",
      link: "https://info-arm.com/tag/%D5%A1%D5%BC%D5%B8%D5%B2%D5%BB%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6/page/2/",
      source: "info-arm.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2bde759e3cddc55b15d873df197090a76047021a-7453279-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2bde759e3cddc55b15d873df197090a76047021a-7453279-images-thumbs",
        height: 80,
        width: 150,
      },
      original_image: {
        link: "https://info-arm.com/wp-content/uploads/2019/01/16986.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Finfo-arm.com%2Fwp-content%2Fuploads%2F2019%2F01%2F16986.jpg",
        height: 350,
        width: 650,
      },
    },
    {
      title:
        "5 հի վանդություններ, որոնց ամենահզոր թշ նամին համարվում է սուրճը, այո՛-այո՛, հասարակ ՍՈՒՐՃԸ - Prolifeblog24.ru",
      link: "https://prolifeblog24.ru/5-%D5%B0%D5%AB-%D5%BE%D5%A1%D5%B6%D5%A4%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6%D5%A5%D6%80-%D5%B8%D6%80%D5%B8%D5%B6%D6%81-%D5%A1%D5%B4%D5%A5%D5%B6%D5%A1%D5%B0%D5%A6%D5%B8%D6%80-%D5%A9%D5%B7/",
      source: "prolifeblog24.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2bde759e3cddc55b15d873df197090a76047021a-7453279-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2bde759e3cddc55b15d873df197090a76047021a-7453279-images-thumbs",
        height: 80,
        width: 150,
      },
      original_image: {
        link: "https://prolifeblog24.ru/wp-content/uploads/2022/11/000-21.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fprolifeblog24.ru%2Fwp-content%2Fuploads%2F2022%2F11%2F000-21.jpg",
        height: 350,
        width: 650,
      },
    },
    {
      title: "Вреден ли кофе? ► Последние новости",
      snippet: "Starbucks. засуха. кофе. ",
      link: "https://imag.one/news/vreden-li-kofe-3/9411002",
      source: "imag.one",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=8eff520b29a44c4e006b8a3e7e51f4a6-5967468-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D8eff520b29a44c4e006b8a3e7e51f4a6-5967468-images-thumbs",
        height: 72,
        width: 150,
      },
      original_image: {
        link: "https://imag.one/storage/thumbs_400/img/2021/8/13/9455639_rmr.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimag.one%2Fstorage%2Fthumbs_400%2Fimg%2F2021%2F8%2F13%2F9455639_rmr.jpg",
        height: 194,
        width: 400,
      },
    },
    {
      title: "NEWS.am Medicine - All about health and medicine",
      link: "https://med.news.am/eng/archive/news/2018/02/02/",
      source: "med.news.am",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=e4496a2431213b54ef849208c89ad6fa-5827144-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3De4496a2431213b54ef849208c89ad6fa-5827144-images-thumbs",
        height: 80,
        width: 150,
      },
      original_image: {
        link: "https://med.news.am/static/news/s/2018/02/16986.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fmed.news.am%2Fstatic%2Fnews%2Fs%2F2018%2F02%2F16986.jpg",
        height: 160,
        width: 300,
      },
    },
    {
      title: "admin - Страница 736 - GOOD LOOKING NEWS",
      link: "https://goodlookingnews.ru/author/axajandm/page/736/",
      source: "goodlookingnews.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=111fa06f948317555d65b9c76972db9d71f49138-5488638-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D111fa06f948317555d65b9c76972db9d71f49138-5488638-images-thumbs",
        height: 63,
        width: 150,
      },
      original_image: {
        link: "https://goodlookingnews.ru/wp-content/uploads/2020/01/%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9-83-330x140.png",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fgoodlookingnews.ru%2Fwp-content%2Fuploads%2F2020%2F01%2F%25D0%2591%25D0%25B5%25D0%25B7%25D1%258B%25D0%25BC%25D1%258F%25D0%25BD%25D0%25BD%25D1%258B%25D0%25B9-83-330x140.png",
        height: 140,
        width: 330,
      },
    },
    {
      title: "Почему во время менструации прием кофе лучше ограничить?",
      snippet:
        "Потребление больших количеств кофе является одним из самых главных ошибок, которые женщины совершают во время менструации, - говорит врач-гинеколог не по Гупта - Well Woman Clinic. ",
      link: "http://medic.donetsk.ua/news/9907/",
      source: "medic.donetsk.ua",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=5c27d40c208b730a298888d0c881dc4f-5690841-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D5c27d40c208b730a298888d0c881dc4f-5690841-images-thumbs",
        height: 81,
        width: 150,
      },
      original_image: {
        link: "http://www.medic.donetsk.ua/images/new_news/ec/ec9521a3d5d93ae58fa16c4430a2698e.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=http%3A%2F%2Fwww.medic.donetsk.ua%2Fimages%2Fnew_news%2Fec%2Fec9521a3d5d93ae58fa16c4430a2698e.jpg",
        height: 162,
        width: 300,
      },
    },
    {
      title: "@go1dencross - جميع منشورات قناة تيليجرام Golden Cross",
      snippet: "image. ",
      link: "https://telemetr.io/ar/channels/1404804802-go1dencross/posts?before=1624",
      source: "telemetr.io",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=35ce7ba56645236d044a82b9bf116f10af857ed1-8287363-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D35ce7ba56645236d044a82b9bf116f10af857ed1-8287363-images-thumbs",
        height: 84,
        width: 150,
      },
      original_image: {
        link: "https://telegra.ph/file/30fe9abed8447b1f31351.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Ftelegra.ph%2Ffile%2F30fe9abed8447b1f31351.jpg",
        height: 451,
        width: 800,
      },
    },
    {
      title: "#breaking_news @Golden Cross",
      snippet: "views. ",
      link: "https://www.hottg.com/Go1dencross/1191/en-SG.html",
      source: "hottg.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=35ce7ba56645236d044a82b9bf116f10af857ed1-8287363-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D35ce7ba56645236d044a82b9bf116f10af857ed1-8287363-images-thumbs",
        height: 84,
        width: 150,
      },
      original_image: {
        link: "https://telegra.ph/file/30fe9abed8447b1f31351.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Ftelegra.ph%2Ffile%2F30fe9abed8447b1f31351.jpg",
        height: 451,
        width: 800,
      },
    },
    {
      title: "Golden Cross TG Telegram @Go1dencross",
      snippet: "Golden Cross ",
      link: "https://www.hottg.com/Go1dencross/p1443.html",
      source: "hottg.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=35ce7ba56645236d044a82b9bf116f10af857ed1-8287363-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D35ce7ba56645236d044a82b9bf116f10af857ed1-8287363-images-thumbs",
        height: 84,
        width: 150,
      },
      original_image: {
        link: "https://telegra.ph/file/30fe9abed8447b1f31351.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Ftelegra.ph%2Ffile%2F30fe9abed8447b1f31351.jpg",
        height: 451,
        width: 800,
      },
    },
    {
      title:
        "Скачать обои кофе, чашка, сахар, напиток, раздел еда в разрешении 3200x1200",
      snippet:
        "Скачать обои кофе, чашка, сахар, напиток, раздел еда в разрешении 3200x1200 ",
      link: "https://www.goodfon.ru/download/kofe-napitok-sahar-chashka/3200x1200/",
      source: "goodfon.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=4f67bc5eeac507796c260af3d26981d16cbf7d36-8496972-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D4f67bc5eeac507796c260af3d26981d16cbf7d36-8496972-images-thumbs",
        height: 56,
        width: 150,
      },
      original_image: {
        link: "https://img1.goodfon.ru/original/3200x1200/2/1e/kofe-napitok-sahar-chashka.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimg1.goodfon.ru%2Foriginal%2F3200x1200%2F2%2F1e%2Fkofe-napitok-sahar-chashka.jpg",
        height: 1200,
        width: 3200,
      },
    },
    {
      title:
        "Скачать обои кофе, чашка, сахар, напиток, раздел еда в разрешении 2560x1024",
      link: "https://avto.goodfon.ru/download/kofe-napitok-sahar-chashka/2560x1024/",
      source: "avto.goodfon.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=fc0d07edf61348abbb13e51e75b55367-5290060-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dfc0d07edf61348abbb13e51e75b55367-5290060-images-thumbs",
        height: 60,
        width: 150,
      },
      original_image: {
        link: "https://img1.goodfon.ru/original/2560x1024/2/1e/kofe-napitok-sahar-chashka.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimg1.goodfon.ru%2Foriginal%2F2560x1024%2F2%2F1e%2Fkofe-napitok-sahar-chashka.jpg",
        height: 1024,
        width: 2560,
      },
    },
    {
      title:
        "Скачать обои кофе, чашка, сахар, напиток, раздел еда в разрешении 2880x900",
      link: "https://avto.goodfon.ru/download/kofe-napitok-sahar-chashka/2880x900/",
      source: "avto.goodfon.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=44be64759b4618665c1e6762faa13e93522229cd-8498443-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D44be64759b4618665c1e6762faa13e93522229cd-8498443-images-thumbs",
        height: 46,
        width: 150,
      },
      original_image: {
        link: "https://img1.goodfon.ru/original/2880x900/2/1e/kofe-napitok-sahar-chashka.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimg1.goodfon.ru%2Foriginal%2F2880x900%2F2%2F1e%2Fkofe-napitok-sahar-chashka.jpg",
        height: 900,
        width: 2880,
      },
    },
    {
      title:
        "Скачать обои кофе, чашка, сахар, напиток, раздел еда в разрешении 3360x1050",
      link: "https://avto.goodfon.ru/download/kofe-napitok-sahar-chashka/3360x1050/",
      source: "avto.goodfon.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=d7e49293386694d8021ab24f0eb4320d-4914299-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dd7e49293386694d8021ab24f0eb4320d-4914299-images-thumbs",
        height: 46,
        width: 150,
      },
      original_image: {
        link: "https://img1.goodfon.ru/original/3360x1050/2/1e/kofe-napitok-sahar-chashka.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimg1.goodfon.ru%2Foriginal%2F3360x1050%2F2%2F1e%2Fkofe-napitok-sahar-chashka.jpg",
        height: 1050,
        width: 3360,
      },
    },
    {
      title:
        "The regular use of coffee reduces risk of developments dementias Health Seldon News",
      snippet:
        "The regular use of coffee reduces risk of developments dementias ",
      link: "https://news.myseldon.com/en/news/index/268231350",
      source: "news.myseldon.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=0932ace917412f8ece6f09815c23f1c9404e3ac7-5424730-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D0932ace917412f8ece6f09815c23f1c9404e3ac7-5424730-images-thumbs",
        height: 60,
        width: 150,
      },
      original_image: {
        link: "https://storage.myseldon.com/news-pict-b4/B40334E94828E57E561C460D3B6F9A87",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fstorage.myseldon.com%2Fnews-pict-b4%2FB40334E94828E57E561C460D3B6F9A87",
        height: 256,
        width: 640,
      },
    },
    {
      title:
        'RuNews24.ru Новости on Twitter: "Ученые заявили о пользе растворимого кофе для организма #общество',
      snippet:
        "“Ученые заявили о пользе растворимого кофе для организма #общество https://t.co/GV2aGFmbkk” ",
      link: "https://twitter.com/runews24ru/status/1426070931059916803",
      source: "twitter.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=e51e8ea6df91848d43a9d2a34812a8dfb68c1663-4544610-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3De51e8ea6df91848d43a9d2a34812a8dfb68c1663-4544610-images-thumbs",
        height: 60,
        width: 150,
      },
      original_image: {
        link: "https://pbs.twimg.com/media/E8pryQRWYAIZJZV.jpg:large",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FE8pryQRWYAIZJZV.jpg%3Alarge",
        height: 256,
        width: 640,
      },
    },
    {
      title:
        "Лікар попередила про небезпеку вживання кави та енергетиків при COVID-19",
      snippet: "Написати нам ",
      link: "https://storinka.com.ua/ukr/2021/11/vrac-predupredila-ob-opasnosti-upotreblenia-kofe-i-energetikov-pri-covid-19/",
      source: "storinka.com.ua",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=20dd81377494ad5689ae6e67ef23c4ceb8766802-8228018-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D20dd81377494ad5689ae6e67ef23c4ceb8766802-8228018-images-thumbs",
        height: 75,
        width: 150,
      },
      original_image: {
        link: "https://storinka.com.ua/storage/source/10/_nuaOeQggJTwOo2pq6HJhvij39iMR64L.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fstorinka.com.ua%2Fstorage%2Fsource%2F10%2F_nuaOeQggJTwOo2pq6HJhvij39iMR64L.jpg",
        height: 400,
        width: 800,
      },
    },
    {
      title:
        "Врач предупредила об опасности употребления кофе и энергетиков при COVID-19",
      snippet:
        "Заболевшим коронавирусом не стоит употреблять кофе и энергетики, чтобы взбодрить свой организм, советует врач-диетолог Елена Соломатина. ",
      link: "https://storinka.com.ua/2021/11/vrac-predupredila-ob-opasnosti-upotreblenia-kofe-i-energetikov-pri-covid-19/",
      source: "storinka.com.ua",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=20dd81377494ad5689ae6e67ef23c4ceb8766802-8228018-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D20dd81377494ad5689ae6e67ef23c4ceb8766802-8228018-images-thumbs",
        height: 75,
        width: 150,
      },
      original_image: {
        link: "https://storinka.com.ua/storage/source/10/_nuaOeQggJTwOo2pq6HJhvij39iMR64L.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fstorinka.com.ua%2Fstorage%2Fsource%2F10%2F_nuaOeQggJTwOo2pq6HJhvij39iMR64L.jpg",
        height: 400,
        width: 800,
      },
    },
    {
      title:
        "Немецкий производитель кофе Tchibo передал свой российский бизнес местному менеджменту Economics Seldon News",
      snippet:
        "Немецкий производитель кофе Tchibo передал свой российский бизнес местному менеджменту ",
      link: "https://news.myseldon.com/en/news/index/271397998",
      source: "news.myseldon.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=e40d8d5805b42c7fcf7457da171cb2761db25dbb-7882711-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3De40d8d5805b42c7fcf7457da171cb2761db25dbb-7882711-images-thumbs",
        height: 77,
        width: 150,
      },
      original_image: {
        link: "https://storage.myseldon.com/news-pict-1d/1DF33BDB00F5DF407238F8EF655FDE5A",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fstorage.myseldon.com%2Fnews-pict-1d%2F1DF33BDB00F5DF407238F8EF655FDE5A",
        height: 400,
        width: 770,
      },
    },
    {
      title: "На тему дня - Информ-прогулка",
      link: "https://inform-progulka.by/topic-day/?iiiii=",
      source: "inform-progulka.by",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=085fb4f0de74a436c738fe36a50fd31b5eb7ea66-7570978-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D085fb4f0de74a436c738fe36a50fd31b5eb7ea66-7570978-images-thumbs",
        height: 67,
        width: 150,
      },
      original_image: {
        link: "https://inform-progulka.by/wp-content/uploads/2022/11/kofe.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Finform-progulka.by%2Fwp-content%2Fuploads%2F2022%2F11%2Fkofe.jpg",
        height: 449,
        width: 995,
      },
    },
    {
      title:
        'Кафе "У друзей" в Казани, ул. Чистопольская, 62, отзывы и график работы, ссылка на официальный сайт',
      snippet: "Время работы сегодня: (Сейчас закрыто). ",
      link: "https://kazan.widoo.ru/venue/view/kafe_u_druzey_107750",
      source: "kazan.widoo.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=a66e13ad9970554807e502c701687f67503b4161-6946654-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Da66e13ad9970554807e502c701687f67503b4161-6946654-images-thumbs",
        height: 64,
        width: 150,
      },
      original_image: {
        link: "https://cdn.widoo.ru/images/company/960x410/107/750/575aa8cab3f8f.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fcdn.widoo.ru%2Fimages%2Fcompany%2F960x410%2F107%2F750%2F575aa8cab3f8f.jpg",
        height: 410,
        width: 960,
      },
    },
    {
      title: "Как употребление кофе влияет на печень: Яндекс.Новости",
      snippet: "Как употребление кофе влияет на печень: Яндекс.Новости ",
      link: "https://yandex.ru/news/story/Ot_cirroza_pecheni_zashhitit_vkusnyj_i_dostupnyj_napitok--2ea82f88091131936be91b864ae29990?lr=10777&lang=ru&stid=tQ5jlowu3NdcSlCNbqPN&persistent_id=104956178&rubric=personal_feed&from=story&nw=1594647215684",
      source: "yandex.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=5c744e23500034f936f3933988f82a43-4890288-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D5c744e23500034f936f3933988f82a43-4890288-images-thumbs",
        height: 80,
        width: 150,
      },
      original_image: {
        link: "http://avatars.mds.yandex.net/get-ynews/2371987/eb9be06ec11d98c57a47fc7d8b5a8d6f/563x304",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=http%3A%2F%2Favatars.mds.yandex.net%2Fget-ynews%2F2371987%2Feb9be06ec11d98c57a47fc7d8b5a8d6f%2F563x304",
        height: 304,
        width: 563,
      },
    },
    {
      title: 'Актуальные события России и мира - в обзоре "Вслух.ру".',
      link: "https://ok.ru/vsluhru/topic/151633998125870",
      source: "ok.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=b465fdda9b8de5ba866e5b1fd019c19a04245f28-8209870-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Db465fdda9b8de5ba866e5b1fd019c19a04245f28-8209870-images-thumbs",
        height: 75,
        width: 150,
      },
      original_image: {
        link: "https://i.mycdn.me/i?r=AzF-kPXTZw6IaWs3aSUGrfjPrlyNVjJu9O8Mx2We__JIG5rqrXAR4fsbOr7qQrL1wwI",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fi.mycdn.me%2Fi%3Fr%3DAzF-kPXTZw6IaWs3aSUGrfjPrlyNVjJu9O8Mx2We__JIG5rqrXAR4fsbOr7qQrL1wwI",
        height: 274,
        width: 548,
      },
    },
    {
      title:
        "Նուրբ, Օդային և Ծակոտկեն Նրբաբլիթներ Ստանալու Գաղտնիքը. Անգամ Սկսնակների Մոտ Է Հիանալի Ստացվում - Prolifeblog24.ru",
      snippet:
        "5 հի վանդություններ, որոնց ամենահզոր թշ նամին համարվում է սուրճը, այո՛-այո՛, հասարակ ՍՈՒՐՃԸ ",
      link: "https://prolifeblog24.ru/%D5%B6%D5%B8%D6%82%D6%80%D5%A2-%D6%85%D5%A4%D5%A1%D5%B5%D5%AB%D5%B6-%D6%87-%D5%AE%D5%A1%D5%AF%D5%B8%D5%BF%D5%AF%D5%A5%D5%B6-%D5%B6%D6%80%D5%A2%D5%A1%D5%A2%D5%AC%D5%AB%D5%A9%D5%B6%D5%A5%D6%80-%D5%BD/",
      source: "prolifeblog24.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=5edef6f80665afa59c35b19aaaa2b63e0463c8bb-8196260-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D5edef6f80665afa59c35b19aaaa2b63e0463c8bb-8196260-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://prolifeblog24.ru/wp-content/uploads/2022/11/000-21-345x230.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fprolifeblog24.ru%2Fwp-content%2Fuploads%2F2022%2F11%2F000-21-345x230.jpg",
        height: 230,
        width: 345,
      },
    },
    {
      title: "Новости за 13 сентября 2022 - Рамблер/доктор",
      snippet:
        'Ученые выяснили, сколько кофе может "держать" давление повышенным. ',
      link: "https://doctor.rambler.ru/2022/09/13/",
      source: "doctor.rambler.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=aaf832c1d35418ef3fed591c3331b964-3308358-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Daaf832c1d35418ef3fed591c3331b964-3308358-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://news.store.rambler.ru/img/9dc3922cf94e7d91c022b822f9eb4b46?img-format=auto&img-1-resize=width:220,height:165,fit:cover&img-2-filter=sharpen",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fnews.store.rambler.ru%2Fimg%2F9dc3922cf94e7d91c022b822f9eb4b46%3Fimg-format%3Dauto%26img-1-resize%3Dwidth%3A220%2Cheight%3A165%2Cfit%3Acover%26img-2-filter%3Dsharpen",
        height: 165,
        width: 220,
      },
    },
    {
      title: "ТОП-10 лучших капсул для кофемашин: рейтинг, отзывы",
      link: "https://kaif-crmp.ru/aksessuary/kapsuly-dlya-kofemashiny-sostav.html",
      source: "kaif-crmp.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=9a28ab8fab52c103ff87877303d433d3356d1424-7765754-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D9a28ab8fab52c103ff87877303d433d3356d1424-7765754-images-thumbs",
        height: 63,
        width: 150,
      },
      original_image: {
        link: "https://kaif-crmp.ru/wp-content/uploads/chashka-kofe7-330x140.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fkaif-crmp.ru%2Fwp-content%2Fuploads%2Fchashka-kofe7-330x140.jpg",
        height: 140,
        width: 330,
      },
    },
    {
      title: "Как выбрать лучшую капсульную кофемашину",
      link: "https://stabcoffee.ru/turki-i-kofevarki/kakie-kapsuly-podhodyat-dlya-kofemashiny-tassimo.html",
      source: "stabcoffee.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=9a28ab8fab52c103ff87877303d433d3356d1424-7765754-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D9a28ab8fab52c103ff87877303d433d3356d1424-7765754-images-thumbs",
        height: 63,
        width: 150,
      },
      original_image: {
        link: "https://stabcoffee.ru/wp-content/uploads/chashka-kofe19-330x140.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fstabcoffee.ru%2Fwp-content%2Fuploads%2Fchashka-kofe19-330x140.jpg",
        height: 140,
        width: 330,
      },
    },
    {
      title:
        "Как выбрать хорошую душевую кабину: совет профессионала. Какие бывают душевые кабины и как определить их качество?",
      link: "https://standoffer.ru/bytovaya/kak-vybrat-dushevuyu-kabinu.html",
      source: "standoffer.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=9a28ab8fab52c103ff87877303d433d3356d1424-7765754-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D9a28ab8fab52c103ff87877303d433d3356d1424-7765754-images-thumbs",
        height: 63,
        width: 150,
      },
      original_image: {
        link: "https://standoffer.ru/wp-content/uploads/chashka-kofe-330x140.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fstandoffer.ru%2Fwp-content%2Fuploads%2Fchashka-kofe-330x140.jpg",
        height: 140,
        width: 330,
      },
    },
    {
      title: "Чем заменить капсулы для кофемашины squesito",
      link: "https://kafe-astrakhani.ru/v-chem-varit/squesito-kapsuly-analogi.html",
      source: "kafe-astrakhani.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=9a28ab8fab52c103ff87877303d433d3356d1424-7765754-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D9a28ab8fab52c103ff87877303d433d3356d1424-7765754-images-thumbs",
        height: 63,
        width: 150,
      },
      original_image: {
        link: "https://kafe-astrakhani.ru/wp-content/uploads/chashka-kofe-330x140.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fkafe-astrakhani.ru%2Fwp-content%2Fuploads%2Fchashka-kofe-330x140.jpg",
        height: 140,
        width: 330,
      },
    },
    {
      title:
        "Volga birch, cafe Saratov, Chernyshevsky, 193 - телефон, адрес, контакты, на карте",
      snippet: "Photo from the owner Volga birch, cafe ",
      link: "https://bagra.ru/?city=saratov&lang=en&razdel=dosug--razvlecheniya--obshchestvennoe-pitanie&cat=kafe&organizaciya=voljskaya-berezka-kafe-5863807",
      source: "bagra.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=66ca26ae92b17ad4c73bed2a0ffc758f993a8b39-8185142-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D66ca26ae92b17ad4c73bed2a0ffc758f993a8b39-8185142-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://i3.photo.2gis.com/images/branch/43/6051712032277406_c724.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fi3.photo.2gis.com%2Fimages%2Fbranch%2F43%2F6051712032277406_c724.jpg",
        height: 960,
        width: 1440,
      },
    },
    {
      title:
        "Прайс-лист Бани На Крестовском на проспекте Динамо - Сауны и бани - Санкт-Петербург",
      snippet: "12 фотографий. бани На Крестовском на проспекте Динамо. ",
      link: "https://spb.zoon.ru/sauna/banya_na_krestovskom_na_prospekte_dinamo/price/",
      source: "spb.zoon.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=831a39d2ab3f04ccf5f4405ddbafa605328023cb-8271622-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D831a39d2ab3f04ccf5f4405ddbafa605328023cb-8271622-images-thumbs",
        height: 120,
        width: 150,
      },
      original_image: {
        link: "https://pr0.zoon.ru/kyL2_xdclCGy2fJKUijUOQ/1000x800,q85/4px-BW84_n2cNG9FmsXqeGJNaKYhYU7LigVvB7rly9B49WvRYWwn9AdKyHdHoLD_HcjqP38JMqE0ikMEk63Dl4j6R-KrtFnSQGmt8-DNAMHgGwBQGnAuDNvtnqScmcqonKdESJkRqZIAzcXLjhSKgA",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fpr0.zoon.ru%2FkyL2_xdclCGy2fJKUijUOQ%2F1000x800%2Cq85%2F4px-BW84_n2cNG9FmsXqeGJNaKYhYU7LigVvB7rly9B49WvRYWwn9AdKyHdHoLD_HcjqP38JMqE0ikMEk63Dl4j6R-KrtFnSQGmt8-DNAMHgGwBQGnAuDNvtnqScmcqonKdESJkRqZIAzcXLjhSKgA",
        height: 800,
        width: 1000,
      },
    },
    {
      title:
        "Եթե դուք ստшբիլ ամեն առավոտ դшռը սուրճ խմեք, այս 3 ծшնր հիվшնդпւթյունները կբուժվեն - Live27Media",
      snippet:
        "Եթե դուք ստшբիլ ամեն առավոտ դшռը սուրճ խմեք, այս 3 ծшնր հիվшնդпւթյունները կբուժվեն ",
      link: "https://live27media.com/%D5%A5%D5%A9%D5%A5-%D5%A4%D5%B8%D6%82%D6%84-%D5%BD%D5%BF%D1%88%D5%A2%D5%AB%D5%AC-%D5%A1%D5%B4%D5%A5%D5%B6-%D5%A1%D5%BC%D5%A1%D5%BE%D5%B8%D5%BF-%D5%A4%D1%88%D5%BC%D5%A8-%D5%BD%D5%B8%D6%82%D6%80%D5%B3/",
      source: "live27media.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=29de0b89429cb07baeb2a1fae40a7366b576869a-7066126-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D29de0b89429cb07baeb2a1fae40a7366b576869a-7066126-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://live27media.com/wp-content/uploads/2021/10/3-223.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Flive27media.com%2Fwp-content%2Fuploads%2F2021%2F10%2F3-223.jpg",
        height: 341,
        width: 512,
      },
    },
    {
      title:
        "Եթե դпւք ստաբիլ ամեն առավոտ դшռը սուրճ խմեք, այս 3 ծшնր հիվшնդությունները կբուժվեն - Media News",
      snippet:
        "Եթե դпւք ստաբիլ ամեն առավոտ դшռը սուրճ խմեք, այս 3 ծшնր հիվшնդությունները կբուժվեն ",
      link: "https://media41news.com/2021/11/10/%D5%A5%D5%A9%D5%A5-%D5%A4%D0%BF%D6%82%D6%84-%D5%BD%D5%BF%D5%A1%D5%A2%D5%AB%D5%AC-%D5%A1%D5%B4%D5%A5%D5%B6-%D5%A1%D5%BC%D5%A1%D5%BE%D5%B8%D5%BF-%D5%A4%D1%88%D5%BC%D5%A8-%D5%BD%D5%B8%D6%82%D6%80%D5%B3/?ertthndxbcvs=yes",
      source: "media41news.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=0f945714d110051803d5cfb61abadf0d7b0ffcad-7820818-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D0f945714d110051803d5cfb61abadf0d7b0ffcad-7820818-images-thumbs",
        height: 99,
        width: 150,
      },
      original_image: {
        link: "https://media41news.com/wp-content/uploads/2021/11/3-12.png",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fmedia41news.com%2Fwp-content%2Fuploads%2F2021%2F11%2F3-12.png",
        height: 299,
        width: 450,
      },
    },
    {
      title:
        "Եթե դпւք ստաբիլ ամեն առավոտ դшռը սուրճ խմեք, այս 3 ծшնր հիվшնդությունները կբուժվեն - Media News",
      snippet:
        "Եթե դուք ստшբիլ шմեն шռшվոտ դшռը սուրճ խմեք, шյս 3 ծшնր հիվшնդությունները կբուժվեն. ",
      link: "https://media41news.com/2021/11/10/%D5%A5%D5%A9%D5%A5-%D5%A4%D0%BF%D6%82%D6%84-%D5%BD%D5%BF%D5%A1%D5%A2%D5%AB%D5%AC-%D5%A1%D5%B4%D5%A5%D5%B6-%D5%A1%D5%BC%D5%A1%D5%BE%D5%B8%D5%BF-%D5%A4%D1%88%D5%BC%D5%A8-%D5%BD%D5%B8%D6%82%D6%80%D5%B3/",
      source: "media41news.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=0f945714d110051803d5cfb61abadf0d7b0ffcad-7820818-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D0f945714d110051803d5cfb61abadf0d7b0ffcad-7820818-images-thumbs",
        height: 99,
        width: 150,
      },
      original_image: {
        link: "https://media41news.com/wp-content/uploads/2021/11/3-12.png",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fmedia41news.com%2Fwp-content%2Fuploads%2F2021%2F11%2F3-12.png",
        height: 299,
        width: 450,
      },
    },
    {
      title:
        "Դաշտանի ժամանակ ավելի լավ է սուրճի օգտագործումը սահմանափակել* ինչո՞ւ",
      snippet:
        "Դաշտանի ժամանակ ավելի լավ է սուրճի օգտագործումը սահմանափակել՝ ինչո՞ւ ",
      link: "https://blog.168.am/blog/131998.html",
      source: "blog.168.am",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=eefd61419935a10762cdba4d289dafd7-3981791-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Deefd61419935a10762cdba4d289dafd7-3981791-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://blog.168.am/wp-content/uploads/2018/02/16986.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fblog.168.am%2Fwp-content%2Fuploads%2F2018%2F02%2F16986.jpg",
        height: 460,
        width: 690,
      },
    },
    {
      title:
        "Мясников развеял один популярный миф о вреде кофе: Яндекс.Новости",
      snippet: "LentaChel.ru ",
      link: "https://yandex.kz/news/story/Myasnikov_razveyal_odin_populyarnyj_mif_o_vrede_kofe--f789de327e65c0d4af8b863660509721?lang=ru&rubric=society&fan=1&stid=gzanA8lWWzNgF-QX97zG&t=1613713201&tt=true&persistent_id=132828111&appsearch_header=1",
      source: "yandex.kz",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2a0000017a0537c6d4c0db35466ced313144-2451231-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2a0000017a0537c6d4c0db35466ced313144-2451231-images-thumbs",
        height: 102,
        width: 150,
      },
      original_image: {
        link: "https://avatars.mds.yandex.net/get-ynews/2815965/15beb4df5d9bafcee229438bb31c034a/254x173",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-ynews%2F2815965%2F15beb4df5d9bafcee229438bb31c034a%2F254x173",
        height: 173,
        width: 254,
      },
    },
    {
      title:
        "8 Signs You Should Stop Drinking Coffee If You Get 2 Symptoms You Need A Break скачать с mp4 mp3 flv",
      snippet: "HEALTH with just 2 cups of COFFEE a day! ",
      link: "https://videomin.org/?q=8+signs+you+should+stop+drinking+coffee+if+you+get+2+symptoms+you+need+a+break",
      source: "videomin.org",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=7da804ef6b0cf077fc0d58f49c3bfbaffb2ff8ec-6726315-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D7da804ef6b0cf077fc0d58f49c3bfbaffb2ff8ec-6726315-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://i.ytimg.com/vi/w3zgMRypYkU/0.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fw3zgMRypYkU%2F0.jpg",
        height: 360,
        width: 480,
      },
    },
    {
      title: "5 Фактов O Представляем вашему вниманию! ВКонтакте",
      link: "https://vk.com/public116651350",
      source: "vk.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=778b5e7b806e2a4940ab24311e450aef-4033961-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D778b5e7b806e2a4940ab24311e450aef-4033961-images-thumbs",
        height: 116,
        width: 150,
      },
      original_image: {
        link: "https://sun9-6.userapi.com/impf/c630324/v630324810/1dfa9/xp_rpa6cpys.jpg?size=604x468&quality=96&sign=71cea6835fc46c14bdce0b0dad46456c&type=album",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun9-6.userapi.com%2Fimpf%2Fc630324%2Fv630324810%2F1dfa9%2Fxp_rpa6cpys.jpg%3Fsize%3D604x468%26quality%3D96%26sign%3D71cea6835fc46c14bdce0b0dad46456c%26type%3Dalbum",
        height: 468,
        width: 604,
      },
    },
    {
      title: "HEALTH with just 2 cups of COFFEE a day! - YouTube",
      link: "https://www.youtube.com/watch?app=desktop&v=w3zgMRypYkU",
      source: "youtube.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=7da804ef6b0cf077fc0d58f49c3bfbaffb2ff8ec-6726315-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D7da804ef6b0cf077fc0d58f49c3bfbaffb2ff8ec-6726315-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://i.ytimg.com/vi/w3zgMRypYkU/hqdefault.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fw3zgMRypYkU%2Fhqdefault.jpg",
        height: 360,
        width: 480,
      },
    },
    {
      title:
        "Esto es lo que hacer con su salud a tan solo 2 tazas de café al día! - YouTube",
      snippet:
        "Esto es lo que hacer con su salud a tan solo 2 tazas de café al día! ",
      link: "https://www.youtube.com/watch?v=knAX0sxbqfw",
      source: "youtube.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2a00000179f8e5c2b6acc12aa61e4949d74f-4326046-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2a00000179f8e5c2b6acc12aa61e4949d74f-4326046-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://i.ytimg.com/vi/knAX0sxbqfw/hqdefault.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FknAX0sxbqfw%2Fhqdefault.jpg",
        height: 360,
        width: 480,
      },
    },
    {
      title:
        "Мясников развеял один популярный миф о вреде кофе: Яндекс.Новости",
      link: "https://yandex.ru/news/story/Myasnikov_razveyal_odin_populyarnyj_mif_o_vrede_kofe--f789de327e65c0d4af8b863660509721?lang=ru&rubric=society&fan=1&stid=gzanA8lWWzNgF-QXOXSh&t=1613716324&tt=true&persistent_id=132828111",
      source: "yandex.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2a0000017a0537c6d4c0db35466ced313144-2451231-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2a0000017a0537c6d4c0db35466ced313144-2451231-images-thumbs",
        height: 102,
        width: 150,
      },
      original_image: {
        link: "https://avatars.mds.yandex.net/get-ynews/2815965/15beb4df5d9bafcee229438bb31c034a/254x173",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-ynews%2F2815965%2F15beb4df5d9bafcee229438bb31c034a%2F254x173",
        height: 173,
        width: 254,
      },
    },
    {
      title:
        '🔴"Какие продукты нельзя есть на голодный желудок "🔴 Быстрые завтраки 🍽 Являясь богатым источником.. ВКонтакте',
      snippet:
        '&#128308;"Какие продукты нельзя есть на голодный желудок "&#128308 ',
      link: "https://vk.com/wall677465980_40",
      source: "vk.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=1951c73f8740b6889d0b572e2b51483e-5544858-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D1951c73f8740b6889d0b572e2b51483e-5544858-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://sun9-79.userapi.com/impg/ImZW308z3nGhPH-5vlwz5gqmz4pqQR6N3YpkLA/7RCeco1X70w.jpg?size=604x604&quality=96&sign=c68f0be4e9251102b7e4f303087fc3c2&type=album",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun9-79.userapi.com%2Fimpg%2FImZW308z3nGhPH-5vlwz5gqmz4pqQR6N3YpkLA%2F7RCeco1X70w.jpg%3Fsize%3D604x604%26quality%3D96%26sign%3Dc68f0be4e9251102b7e4f303087fc3c2%26type%3Dalbum",
        height: 604,
        width: 604,
      },
    },
    {
      title: "Аналоги капсулы для кофемашины dolce gusto",
      snippet:
        "Более пользующимися популярностью производителями кофемашин являются Dolce Gusto, Nespresso и Tassimo. ",
      link: "https://standoffer.ru/na-dosuge/kapsuly-dolche-gusto-analogi.html",
      source: "standoffer.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=da978db3396083c6005da7ab9073a9cc34e5e9fd-8264494-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dda978db3396083c6005da7ab9073a9cc34e5e9fd-8264494-images-thumbs",
        height: 127,
        width: 150,
      },
      original_image: {
        link: "https://standoffer.ru/wp-content/uploads/analogikapsulidlyakofemashinidolcegusto_18a885d0.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fstandoffer.ru%2Fwp-content%2Fuploads%2Fanalogikapsulidlyakofemashinidolcegusto_18a885d0.jpg",
        height: 452,
        width: 532,
      },
    },
    {
      title: "Аналоги капсулы для кофемашины dolce gusto",
      snippet:
        "Для его изготовления употребляются особые капсулы в согласовании: 1 капсула... ",
      link: "https://ostrov-sladostey.ru/dlya-varki/kapsuly-dlya-kofemashiny-svoimi-rukami.html",
      source: "ostrov-sladostey.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=da978db3396083c6005da7ab9073a9cc34e5e9fd-8264494-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dda978db3396083c6005da7ab9073a9cc34e5e9fd-8264494-images-thumbs",
        height: 127,
        width: 150,
      },
      original_image: {
        link: "https://ostrov-sladostey.ru/wp-content/uploads/tdzrxbf3.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fostrov-sladostey.ru%2Fwp-content%2Fuploads%2Ftdzrxbf3.jpg",
        height: 452,
        width: 532,
      },
    },
    {
      title: "Капсулы от кофе - РазДельный Сбор - сайт справочник",
      snippet: "Кофе пей! ",
      link: "https://kuhniperm.ru/dlya-varki/kak-povtorno-ispolzovat-kapsuly-dlya-kofemashiny.html",
      source: "kuhniperm.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=da978db3396083c6005da7ab9073a9cc34e5e9fd-8264494-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dda978db3396083c6005da7ab9073a9cc34e5e9fd-8264494-images-thumbs",
        height: 127,
        width: 150,
      },
      original_image: {
        link: "https://kuhniperm.ru/wp-content/uploads/analogikapsulidlyakofemashinidolcegusto_18a885d0.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fkuhniperm.ru%2Fwp-content%2Fuploads%2Fanalogikapsulidlyakofemashinidolcegusto_18a885d0.jpg",
        height: 452,
        width: 532,
      },
    },
    {
      title: "Аналоги капсулы для кофемашины dolce gusto",
      snippet:
        "Более пользующимися популярностью производителями кофемашин являются Dolce Gusto, Nespresso и Tassimo. ",
      link: "https://honestconsult.ru/domashnyaya/kapsuly-dolche-gusto-analogi.html",
      source: "honestconsult.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=da978db3396083c6005da7ab9073a9cc34e5e9fd-8264494-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dda978db3396083c6005da7ab9073a9cc34e5e9fd-8264494-images-thumbs",
        height: 127,
        width: 150,
      },
      original_image: {
        link: "https://honestconsult.ru/wp-content/uploads/analogikapsulidlyakofemashinidolcegusto_18a885d0.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fhonestconsult.ru%2Fwp-content%2Fuploads%2Fanalogikapsulidlyakofemashinidolcegusto_18a885d0.jpg",
        height: 452,
        width: 532,
      },
    },
    {
      title: "Аналоги капсулы для кофемашины dolce gusto",
      snippet: "Кофейные капсулы для очень экономичных ",
      link: "https://chocolatspa.ru/dlya-varki/moloko-v-kapsulah-dlya-kofemashiny.html",
      source: "chocolatspa.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=da978db3396083c6005da7ab9073a9cc34e5e9fd-8264494-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dda978db3396083c6005da7ab9073a9cc34e5e9fd-8264494-images-thumbs",
        height: 127,
        width: 150,
      },
      original_image: {
        link: "https://chocolatspa.ru/wp-content/uploads/analogikapsulidlyakofemashinidolcegusto_18a885d0.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fchocolatspa.ru%2Fwp-content%2Fuploads%2Fanalogikapsulidlyakofemashinidolcegusto_18a885d0.jpg",
        height: 452,
        width: 532,
      },
    },
    {
      title: "Мозаика 26*36 см А-1587 Чашка кофе - Каталог",
      snippet: "Полная. ",
      link: "https://rukodelie-online.ru/catalog/mozaika-26-36-sm-a-1587-chashka-kofe.html",
      source: "rukodelie-online.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2a0000017a17604027ae4bdbc494f5b4b69f-4234439-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2a0000017a17604027ae4bdbc494f5b4b69f-4234439-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://rukodelie-online.ru/upload/catalog/items/37caf966a2/th_361085964f26686d0c22eaa3105c2dae.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Frukodelie-online.ru%2Fupload%2Fcatalog%2Fitems%2F37caf966a2%2Fth_361085964f26686d0c22eaa3105c2dae.jpg",
        height: 250,
        width: 250,
      },
    },
    {
      title:
        "алмазная вышивка чашка кофе - купить по низкой цене на Яндекс.Маркете",
      link: "https://market.yandex.ru/catalog--almaznaia-mozaika/18071567/list?text=%D0%B0%D0%BB%D0%BC%D0%B0%D0%B7%D0%BD%D0%B0%D1%8F%20%D0%B2%D1%8B%D1%88%D0%B8%D0%B2%D0%BA%D0%B0%20%D1%87%D0%B0%D1%88%D0%BA%D0%B0%20%D0%BA%D0%BE%D1%84%D0%B5",
      source: "market.yandex.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=1431eb90a123b898638077f06ef6f126-5491388-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D1431eb90a123b898638077f06ef6f126-5491388-images-thumbs",
        height: 106,
        width: 150,
      },
      original_image: {
        link: "https://avatars.mds.yandex.net/get-mpic/4782842/img_id3463357649792878073.jpeg/x248_trim",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-mpic%2F4782842%2Fimg_id3463357649792878073.jpeg%2Fx248_trim",
        height: 236,
        width: 332,
      },
    },
    {
      title:
        'Кофе "Эспрессо смесь", МОЛОТЫЙ, 100 гр., РЯД по 5 шт купить, отзывы, фото, доставка - Совместные покупки в Краснодаре',
      snippet: 'Кофе "Эспрессо смесь", МОЛОТЫЙ, 100 гр., РЯД по 5 шт ',
      link: "https://spclub23.ru/tovar/kofe-espresso-smes-molotyi-100-gr-ryad-po-5-sht-370550998",
      source: "spclub23.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=835f007268fde97524fb3508c9c139472ca3cdfd-7736363-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D835f007268fde97524fb3508c9c139472ca3cdfd-7736363-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://spclub23.ru/files/65c/65c4c414f74aa86b98d9a89d91fa45ae-fit-250x250.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fspclub23.ru%2Ffiles%2F65c%2F65c4c414f74aa86b98d9a89d91fa45ae-fit-250x250.jpg",
        height: 250,
        width: 250,
      },
    },
    {
      title:
        "Алмазная мозаика - удивительный шедевр своими руками - 28. Стоп 9.12 - Клуб экономных родителей",
      link: "https://chudomama.com/purchases/164788?Item_page=5&Review_page=4",
      source: "chudomama.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=6f26b2c274b9b2140db4889e9aed3dbd-4903388-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D6f26b2c274b9b2140db4889e9aed3dbd-4903388-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://photosyn.ru/2a556f30-52bf-4099-9ef9-5d9196da105d/220x220/",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fphotosyn.ru%2F2a556f30-52bf-4099-9ef9-5d9196da105d%2F220x220%2F",
        height: 220,
        width: 220,
      },
    },
    {
      title:
        "Кофе зерно Tempelmann NOMOS CAFE CREMA 1кг, Германия Tempelmann 142049119 купить в интернет-магазине Wildberries",
      snippet:
        "Кофе зерно Tempelmann NOMOS CAFE CREMA 1кг, Германия Tempelmann. ",
      link: "https://www.wildberries.ru/catalog/142049119/detail.aspx",
      source: "wildberries.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=61bdf576984dfcada99529955b2cd33e124df5f6-8176762-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D61bdf576984dfcada99529955b2cd33e124df5f6-8176762-images-thumbs",
        height: 150,
        width: 112,
      },
      original_image: {
        link: "https://basket-10.wb.ru/vol1420/part142049/142049119/images/c246x328/7.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fbasket-10.wb.ru%2Fvol1420%2Fpart142049%2F142049119%2Fimages%2Fc246x328%2F7.jpg",
        height: 328,
        width: 246,
      },
    },
    {
      title:
        "Про КОФЕ можно писать бесконечно. пишут много и про пользу и про вред данного напитка. Кофе ☕ ️является одним.. 2022 ВКонтакте",
      snippet:
        "Про КОФЕ можно писать бесконечно. пишут много и про пользу и про вред данного напитка. ",
      link: "https://vk.com/wall152929221_746",
      source: "vk.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=771c99ffe704bdad5c0e31dea48da56771b90797-8200828-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D771c99ffe704bdad5c0e31dea48da56771b90797-8200828-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://sun9-8.userapi.com/impg/FkZprlrTMMaz7CrBXr5dFUgINB1P_pWFIR1IFA/45knbtS1J5g.jpg?size=512x341&quality=95&sign=107a8ad5ec79b71ba8789118709ca7f7&type=album",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun9-8.userapi.com%2Fimpg%2FFkZprlrTMMaz7CrBXr5dFUgINB1P_pWFIR1IFA%2F45knbtS1J5g.jpg%3Fsize%3D512x341%26quality%3D95%26sign%3D107a8ad5ec79b71ba8789118709ca7f7%26type%3Dalbum",
        height: 341,
        width: 512,
      },
    },
    {
      title: "Альбина Китаева, Саранск, Россия",
      snippet: "Альбина Китаева, Саранск, Россия ",
      link: "https://iprofiles.ru/al-bina-kitaeva/152929221/",
      source: "iprofiles.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=771c99ffe704bdad5c0e31dea48da56771b90797-8200828-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D771c99ffe704bdad5c0e31dea48da56771b90797-8200828-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://sun9-8.userapi.com/impg/FkZprlrTMMaz7CrBXr5dFUgINB1P_pWFIR1IFA/45knbtS1J5g.jpg?size=512x341&quality=95&sign=107a8ad5ec79b71ba8789118709ca7f7&c_uniq_tag=v1JW9Ky8bmVkjRM8bKGuEAPEtRmJv4r5DrGHlquQJww&type=album",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun9-8.userapi.com%2Fimpg%2FFkZprlrTMMaz7CrBXr5dFUgINB1P_pWFIR1IFA%2F45knbtS1J5g.jpg%3Fsize%3D512x341%26quality%3D95%26sign%3D107a8ad5ec79b71ba8789118709ca7f7%26c_uniq_tag%3Dv1JW9Ky8bmVkjRM8bKGuEAPEtRmJv4r5DrGHlquQJww%26type%3Dalbum",
        height: 341,
        width: 512,
      },
    },
    {
      title: "Альбина Китаева ВКонтакте, Саранск, Россия, id152929221",
      snippet: "Найди себя ",
      link: "https://vk-list.com/user/albina_kitaeva",
      source: "vk-list.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=771c99ffe704bdad5c0e31dea48da56771b90797-8200828-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D771c99ffe704bdad5c0e31dea48da56771b90797-8200828-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://sun9-8.userapi.com/impg/FkZprlrTMMaz7CrBXr5dFUgINB1P_pWFIR1IFA/45knbtS1J5g.jpg?size=512x341&quality=95&sign=107a8ad5ec79b71ba8789118709ca7f7&c_uniq_tag=v1JW9Ky8bmVkjRM8bKGuEAPEtRmJv4r5DrGHlquQJww&type=album",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun9-8.userapi.com%2Fimpg%2FFkZprlrTMMaz7CrBXr5dFUgINB1P_pWFIR1IFA%2F45knbtS1J5g.jpg%3Fsize%3D512x341%26quality%3D95%26sign%3D107a8ad5ec79b71ba8789118709ca7f7%26c_uniq_tag%3Dv1JW9Ky8bmVkjRM8bKGuEAPEtRmJv4r5DrGHlquQJww%26type%3Dalbum",
        height: 341,
        width: 512,
      },
    },
    {
      title:
        "С добрым утром!!!#стерлитамак #татуажвстерлитамаке #перманентныймакияжвстерлитамаке #татуажстрелки #лилямустаева #татуажвек By Т",
      snippet:
        "С добрым утром!!!#стерлитамак #татуажвстерлитамаке #перманентныймакияжвстерлитамаке #татуажстрелки #лилямустаева #татуажвек By Татуаж в Стерлитамаке ",
      link: "https://www.facebook.com/tatuazh01/videos/%D1%81-%D0%B4%D0%BE%D0%B1%D1%80%D1%8B%D0%BC-%D1%83%D1%82%D1%80%D0%BE%D0%BC%D1%81%D1%82%D0%B5%D1%80%D0%BB%D0%B8%D1%82%D0%B0%D0%BC%D0%B0%D0%BA-%D1%82%D0%B0%D1%82%D1%83%D0%B0%D0%B6%D0%B2%D1%81%D1%82%D0%B5%D1%80%D0%BB%D0%B8%D1%82%D0%B0%D0%BC%D0%B0%D0%BA%D0%B5-%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B5%D0%BD%D1%82%D0%BD%D1%8B%D0%B9%D0%BC%D0%B0%D0%BA%D0%B8%D1%8F%D0%B6%D0%B2%D1%81%D1%82%D0%B5%D1%80%D0%BB%D0%B8%D1%82%D0%B0%D0%BC%D0%B0%D0%BA%D0%B5-%D1%82%D0%B0/331913030718908/",
      source: "facebook.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=35ac965b7e43ffe29b7b29b643cbc8e2ca7ecf2f-6969813-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D35ac965b7e43ffe29b7b29b643cbc8e2ca7ecf2f-6969813-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=331913030718908&get_thumbnail=1",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D331913030718908%26get_thumbnail%3D1",
        height: 640,
        width: 640,
      },
    },
    {
      title:
        "Купить с кэшбэком Кофе растворимый BUSHIDO Original 100 гр BUSHIDO 119149721 за 1 399 ₽ в интернет-магазине Wildberries",
      snippet:
        "Кофе растворимый BUSHIDO Original 100 гр BUSHIDO 119149721 купить за 1&nbsp;399&nbsp;₽ в интернет-магазине Wildberries. ",
      link: "https://smartcart.megabonus.com/item/83474624-kofe-rastvorimyy-bushido-original-100-gr-bushido-119149721-kupit-za-1-399-v",
      source: "smartcart.megabonus.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=7f1bab55d225c5552ac8b1c51054b65148be9c39-7855968-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D7f1bab55d225c5552ac8b1c51054b65148be9c39-7855968-images-thumbs",
        height: 150,
        width: 112,
      },
      original_image: {
        link: "https://basket-09.wb.ru/vol1191/part119149/119149721/images/c246x328/4.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fbasket-09.wb.ru%2Fvol1191%2Fpart119149%2F119149721%2Fimages%2Fc246x328%2F4.jpg",
        height: 328,
        width: 246,
      },
    },
    {
      title: "С добрым утром!!!#стерлитамак... - Татуаж в Стерлитамаке",
      snippet: "Uz Facebook sākumlapu ",
      link: "https://lv-lv.facebook.com/tatuazh01/videos/%D1%81-%D0%B4%D0%BE%D0%B1%D1%80%D1%8B%D0%BC-%D1%83%D1%82%D1%80%D0%BE%D0%BC%D1%81%D1%82%D0%B5%D1%80%D0%BB%D0%B8%D1%82%D0%B0%D0%BC%D0%B0%D0%BA-%D1%82%D0%B0%D1%82%D1%83%D0%B0%D0%B6%D0%B2%D1%81%D1%82%D0%B5%D1%80%D0%BB%D0%B8%D1%82%D0%B0%D0%BC%D0%B0%D0%BA%D0%B5-%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B5%D0%BD%D1%82%D0%BD%D1%8B%D0%B9%D0%BC%D0%B0%D0%BA%D0%B8%D1%8F%D0%B6%D0%B2%D1%81%D1%82%D0%B5%D1%80%D0%BB%D0%B8%D1%82%D0%B0%D0%BC%D0%B0%D0%BA%D0%B5-%D1%82%D0%B0/331913030718908/",
      source: "lv-lv.facebook.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=35ac965b7e43ffe29b7b29b643cbc8e2ca7ecf2f-6969813-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D35ac965b7e43ffe29b7b29b643cbc8e2ca7ecf2f-6969813-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=331913030718908&get_thumbnail=1",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D331913030718908%26get_thumbnail%3D1",
        height: 640,
        width: 640,
      },
    },
    {
      title: "С добрым утром!!!#стерлитамак... - Татуаж в Стерлитамаке",
      snippet: "Zur Facebook-Startseite gehen ",
      link: "https://de-de.facebook.com/tatuazh01/videos/%D1%81-%D0%B4%D0%BE%D0%B1%D1%80%D1%8B%D0%BC-%D1%83%D1%82%D1%80%D0%BE%D0%BC%D1%81%D1%82%D0%B5%D1%80%D0%BB%D0%B8%D1%82%D0%B0%D0%BC%D0%B0%D0%BA-%D1%82%D0%B0%D1%82%D1%83%D0%B0%D0%B6%D0%B2%D1%81%D1%82%D0%B5%D1%80%D0%BB%D0%B8%D1%82%D0%B0%D0%BC%D0%B0%D0%BA%D0%B5-%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B5%D0%BD%D1%82%D0%BD%D1%8B%D0%B9%D0%BC%D0%B0%D0%BA%D0%B8%D1%8F%D0%B6%D0%B2%D1%81%D1%82%D0%B5%D1%80%D0%BB%D0%B8%D1%82%D0%B0%D0%BC%D0%B0%D0%BA%D0%B5-%D1%82%D0%B0/331913030718908/",
      source: "de-de.facebook.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=35ac965b7e43ffe29b7b29b643cbc8e2ca7ecf2f-6969813-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D35ac965b7e43ffe29b7b29b643cbc8e2ca7ecf2f-6969813-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=331913030718908&get_thumbnail=1",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D331913030718908%26get_thumbnail%3D1",
        height: 640,
        width: 640,
      },
    },
    {
      title:
        "Кофе растворимый BUSHIDO Original 100 гр BUSHIDO 119149721 купить в интернет-магазине Wildberries",
      link: "https://uz.wildberries.ru/catalog/119149721/detail.aspx",
      source: "uz.wildberries.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=7f1bab55d225c5552ac8b1c51054b65148be9c39-7855968-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D7f1bab55d225c5552ac8b1c51054b65148be9c39-7855968-images-thumbs",
        height: 150,
        width: 112,
      },
      original_image: {
        link: "https://basket-09.wb.ru/vol1191/part119149/119149721/images/c246x328/4.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fbasket-09.wb.ru%2Fvol1191%2Fpart119149%2F119149721%2Fimages%2Fc246x328%2F4.jpg",
        height: 328,
        width: 246,
      },
    },
    {
      title:
        "Кофе растворимый BUSHIDO Original 100 гр BUSHIDO 119150567 купить в интернет-магазине Wildberries",
      link: "https://www.wildberries.ru/catalog/119150567/detail.aspx",
      source: "wildberries.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=7f1bab55d225c5552ac8b1c51054b65148be9c39-7855968-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D7f1bab55d225c5552ac8b1c51054b65148be9c39-7855968-images-thumbs",
        height: 150,
        width: 112,
      },
      original_image: {
        link: "https://basket-09.wb.ru/vol1191/part119150/119150567/images/c246x328/4.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fbasket-09.wb.ru%2Fvol1191%2Fpart119150%2F119150567%2Fimages%2Fc246x328%2F4.jpg",
        height: 328,
        width: 246,
      },
    },
    {
      title: "Что может соль. Полезные способы использования соли в быту",
      snippet: "Кофе. ",
      link: "https://vanilla.su/chto-mozhet-sol-poleznye-sposoby-ispolzovaniya-soli-v-bytu.html",
      source: "vanilla.su",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=95ca6255924bfed76aef121eafa555bfdcf6f2ea-8240464-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D95ca6255924bfed76aef121eafa555bfdcf6f2ea-8240464-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://avatars.dzeninfra.ru/get-zen_doc/2431229/pub_5fdc69297c919e46c0d56b73_5fdc8c327c919e46c025d399/scale_1200",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.dzeninfra.ru%2Fget-zen_doc%2F2431229%2Fpub_5fdc69297c919e46c0d56b73_5fdc8c327c919e46c025d399%2Fscale_1200",
        height: 900,
        width: 1200,
      },
    },
    {
      title:
        "Что может соль. Полезные способы использования соли в быту Красиво и Продукты Постила",
      link: "https://postila.ru/post/71408270",
      source: "postila.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=95ca6255924bfed76aef121eafa555bfdcf6f2ea-8240464-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D95ca6255924bfed76aef121eafa555bfdcf6f2ea-8240464-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://postila.ru/data/e4/6d/b7/9a/e46db79a2fbf1b6771e51a367a1acaec4adb665d008b38c1452df3d68b7dea1c.png",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fpostila.ru%2Fdata%2Fe4%2F6d%2Fb7%2F9a%2Fe46db79a2fbf1b6771e51a367a1acaec4adb665d008b38c1452df3d68b7dea1c.png",
        height: 900,
        width: 1200,
      },
    },
    {
      title: "Продукты Alex Khlapov Фотографии и советы на Постиле",
      snippet: "Продукты Alex Khlapov Фотографии и советы на Постиле ",
      link: "https://postila.ru/id7429281/1455993-produktyi",
      source: "postila.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=e83cc76f8459e1e451caae5ccf058ef879a9f860-8285499-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3De83cc76f8459e1e451caae5ccf058ef879a9f860-8285499-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://postila.ru/resize?w=660&src=%2Fdata%2Fe4%2F6d%2Fb7%2F9a%2Fe46db79a2fbf1b6771e51a367a1acaec4adb665d008b38c1452df3d68b7dea1c.png",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fpostila.ru%2Fresize%3Fw%3D660%26src%3D%252Fdata%252Fe4%252F6d%252Fb7%252F9a%252Fe46db79a2fbf1b6771e51a367a1acaec4adb665d008b38c1452df3d68b7dea1c.png",
        height: 495,
        width: 660,
      },
    },
    {
      title: "Продукты Alex Khlapov Фотографии и советы на Постиле",
      snippet:
        'Посты по теме "Продукты", добавленные пользователем Alex Khlapov на Постилу. ',
      link: "https://postila.ru/id7429281/1455992-produktyi",
      source: "postila.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=e83cc76f8459e1e451caae5ccf058ef879a9f860-8285499-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3De83cc76f8459e1e451caae5ccf058ef879a9f860-8285499-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://postila.ru/resize?w=660&src=%2Fdata%2Fe4%2F6d%2Fb7%2F9a%2Fe46db79a2fbf1b6771e51a367a1acaec4adb665d008b38c1452df3d68b7dea1c.png",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fpostila.ru%2Fresize%3Fw%3D660%26src%3D%252Fdata%252Fe4%252F6d%252Fb7%252F9a%252Fe46db79a2fbf1b6771e51a367a1acaec4adb665d008b38c1452df3d68b7dea1c.png",
        height: 495,
        width: 660,
      },
    },
    {
      title:
        "Николай Борисович, Москва, 51 год, Россия - полная информация о человеке из профиля (id390597076) в социальных сетях",
      snippet: "Николай Борисович фотография #27 ",
      link: "https://profiles-vkontakte.ru/390597076-nikolay-borisovich-moscow.html",
      source: "profiles-vkontakte.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=248779c4762e0b3502ddd7407b41addfdbfd21ef-8497418-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D248779c4762e0b3502ddd7407b41addfdbfd21ef-8497418-images-thumbs",
        height: 99,
        width: 150,
      },
      original_image: {
        link: "https://sun9-51.userapi.com/impg/N7m5EH8aP4nWnnwURFS3vUuaITIn0xMfSIf7bw/r7v7PUaDeEs.jpg?size=807x533&quality=95&sign=430cf425fb152da99ed1f90652320b7f&c_uniq_tag=sIhCbuOgHT0Qt2-VDFPb3WFKbUYjkQqAiKnlTwvcyIU&type=album",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun9-51.userapi.com%2Fimpg%2FN7m5EH8aP4nWnnwURFS3vUuaITIn0xMfSIf7bw%2Fr7v7PUaDeEs.jpg%3Fsize%3D807x533%26quality%3D95%26sign%3D430cf425fb152da99ed1f90652320b7f%26c_uniq_tag%3DsIhCbuOgHT0Qt2-VDFPb3WFKbUYjkQqAiKnlTwvcyIU%26type%3Dalbum",
        height: 533,
        width: 807,
      },
    },
    {
      title: "Николай Борисович, Москва, Россия",
      link: "https://iprofiles.ru/nikolay-borisovich/390597076/",
      source: "iprofiles.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=c3c936f3a5e2ea5013d48a2efb100c270c7ae895-7761267-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dc3c936f3a5e2ea5013d48a2efb100c270c7ae895-7761267-images-thumbs",
        height: 99,
        width: 150,
      },
      original_image: {
        link: "https://sun9-west.userapi.com/sun9-51/s/v1/ig2/JfzwMnlpMKra88R_q9NM5m-O1t6Cz8qH3CjYHtjGgM3_lFLLrgM9gWrUza051gwAsk_uVYHi5zjnpzkSQAFwevI2.jpg?size=1280x845&quality=95&type=album",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun9-west.userapi.com%2Fsun9-51%2Fs%2Fv1%2Fig2%2FJfzwMnlpMKra88R_q9NM5m-O1t6Cz8qH3CjYHtjGgM3_lFLLrgM9gWrUza051gwAsk_uVYHi5zjnpzkSQAFwevI2.jpg%3Fsize%3D1280x845%26quality%3D95%26type%3Dalbum",
        height: 845,
        width: 1280,
      },
    },
    {
      title: "Можно ли кормящей маме кофе с молоком Кофе и здоровье",
      snippet:
        "Кофе с молоком при грудном вскармливании: можно ли пить латте при гв, с какого месяца не запрещается включать в питание женщины, допустим ли в рационе ребенка? ",
      link: "https://omtea.ru/mozno-li-kormasej-mame-kofe-s-molokom-kofe-i-zdorove/",
      source: "omtea.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=4410205255ab6246f0c11bc530b5e8b5659f85f7-8193216-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D4410205255ab6246f0c11bc530b5e8b5659f85f7-8193216-images-thumbs",
        height: 78,
        width: 150,
      },
      original_image: {
        link: "https://omtea.ru/wp-content/uploads/c/7/5/c7504970272a1380511f7e6f25d18097.png",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fomtea.ru%2Fwp-content%2Fuploads%2Fc%2F7%2F5%2Fc7504970272a1380511f7e6f25d18097.png",
        height: 630,
        width: 1200,
      },
    },
    {
      title: "Можно ли кормящей маме кофе?",
      snippet: "Кофе при грудном вскармливании: да или нет? ",
      link: "https://kidsbebus.ru/mozno-li-kormasej-mame-kofe/",
      source: "kidsbebus.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=4410205255ab6246f0c11bc530b5e8b5659f85f7-8193216-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D4410205255ab6246f0c11bc530b5e8b5659f85f7-8193216-images-thumbs",
        height: 78,
        width: 150,
      },
      original_image: {
        link: "https://kidsbebus.ru/wp-content/uploads/9/5/9/959f50f017dd7decc3c4838b338d8832.png",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fkidsbebus.ru%2Fwp-content%2Fuploads%2F9%2F5%2F9%2F959f50f017dd7decc3c4838b338d8832.png",
        height: 630,
        width: 1200,
      },
    },
    {
      title: "Кофе при грудном вскармливании: можно ли пить",
      snippet: "Выбор кофе ",
      link: "https://kidsbebus.ru/kofe-pri-grudnom-vskarmlivanii-mozno-li-pit/",
      source: "kidsbebus.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=4410205255ab6246f0c11bc530b5e8b5659f85f7-8193216-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D4410205255ab6246f0c11bc530b5e8b5659f85f7-8193216-images-thumbs",
        height: 78,
        width: 150,
      },
      original_image: {
        link: "https://kidsbebus.ru/wp-content/uploads/c/7/5/c7504970272a1380511f7e6f25d18097.png",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fkidsbebus.ru%2Fwp-content%2Fuploads%2Fc%2F7%2F5%2Fc7504970272a1380511f7e6f25d18097.png",
        height: 630,
        width: 1200,
      },
    },
    {
      title:
        "Что можно кушать после расстройства желудка. Диета назначается с учетом вида поноса. Когда требуется помощь врача",
      snippet:
        "При проблемах желудка и желудочно-кишечного трактабольному, прежде всего, необходимо скорректировать свой ежедневный рацион питания, исключив продукты, которые вызывают отторжение желудком или дают большую нагрузку на органы пищеварения. ",
      link: "https://dnosp.ru/chto-mozhno-kushat-posle-rasstroistva-zheludka-dieta-naznachaetsya-s-uchetom.html",
      source: "dnosp.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=e7e94f82e1217f077c853ee322bf67f0-4034499-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3De7e94f82e1217f077c853ee322bf67f0-4034499-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://i2.wp.com/ozdravin.ru/uploads/styles/article_image/public/articles/2016/10/kofe.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fi2.wp.com%2Fozdravin.ru%2Fuploads%2Fstyles%2Farticle_image%2Fpublic%2Farticles%2F2016%2F10%2Fkofe.jpg",
        height: 300,
        width: 450,
      },
    },
    {
      title:
        "Диета после расстройства желудка. Диетический рацион при различных заболеваниях пищеварительного тракта. Рекомендации по термиче",
      snippet: "Ортодонтия ",
      link: "https://jointshop.ru/dieta-posle-rasstroistva-zheludka-dieticheskii-racion-pri/",
      source: "jointshop.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=e7e94f82e1217f077c853ee322bf67f0-4034499-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3De7e94f82e1217f077c853ee322bf67f0-4034499-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://i2.wp.com/ozdravin.ru/uploads/styles/article_image/public/articles/2016/10/kofe.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fi2.wp.com%2Fozdravin.ru%2Fuploads%2Fstyles%2Farticle_image%2Fpublic%2Farticles%2F2016%2F10%2Fkofe.jpg",
        height: 300,
        width: 450,
      },
    },
    {
      title: "Что можно есть при сильном расстройстве желудка. Что можно пить",
      link: "https://ordorealty.ru/intestinal-colic/chto-mozhno-est-pri-silnom-rasstroistve-zheludka-chto-mozhno-pit-chto/",
      source: "ordorealty.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=e7e94f82e1217f077c853ee322bf67f0-4034499-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3De7e94f82e1217f077c853ee322bf67f0-4034499-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://i1.wp.com/ozdravin.ru/uploads/styles/article_image/public/articles/2016/10/kofe.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fi1.wp.com%2Fozdravin.ru%2Fuploads%2Fstyles%2Farticle_image%2Fpublic%2Farticles%2F2016%2F10%2Fkofe.jpg",
        height: 300,
        width: 450,
      },
    },
    {
      title:
        "Что кушать если расстройство желудка. Питание при расстройстве желудка",
      link: "https://domserv75.ru/chto-kushat-esli-rasstroistvo-zheludka-pitanie-pri-rasstroistve.html",
      source: "domserv75.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=e7e94f82e1217f077c853ee322bf67f0-4034499-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3De7e94f82e1217f077c853ee322bf67f0-4034499-images-thumbs",
        height: 100,
        width: 150,
      },
      original_image: {
        link: "https://i2.wp.com/ozdravin.ru/uploads/styles/article_image/public/articles/2016/10/kofe.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fi2.wp.com%2Fozdravin.ru%2Fuploads%2Fstyles%2Farticle_image%2Fpublic%2Farticles%2F2016%2F10%2Fkofe.jpg",
        height: 300,
        width: 450,
      },
    },
    {
      title: "Кофе Со Скидкой В Магазинах - Tutshoping.ru",
      snippet: "Кофе Со Скидкой В Магазинах ",
      link: "https://tutshoping.ru/%D0%BA%D0%BE%D1%84%D0%B5-%D1%81%D0%BE-%D1%81%D0%BA%D0%B8%D0%B4%D0%BA%D0%BE%D0%B9-%D0%B2-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D0%B0%D1%85/",
      source: "tutshoping.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2a0000017a0f8d9f6b271e9d7b4b6ea4437a-4351283-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2a0000017a0f8d9f6b271e9d7b4b6ea4437a-4351283-images-thumbs",
        height: 150,
        width: 105,
      },
      original_image: {
        link: "http://afisha.orsk.ru/images/afisha/posters/o/1480929055966_14809290552426.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=http%3A%2F%2Fafisha.orsk.ru%2Fimages%2Fafisha%2Fposters%2Fo%2F1480929055966_14809290552426.jpg",
        height: 750,
        width: 529,
      },
    },
    {
      title: 'Утренняя акция в "Чудо-пончике": кофе со скидкой 30',
      snippet: 'Утренняя акция в "Чудо-пончике": кофе со скидкой 30. ',
      link: "http://remont.orsk.ru/index.php?r=afisha/events/view&cat=12&id=14093",
      source: "remont.orsk.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2a0000017a0f8d9f6b271e9d7b4b6ea4437a-4351283-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2a0000017a0f8d9f6b271e9d7b4b6ea4437a-4351283-images-thumbs",
        height: 150,
        width: 105,
      },
      original_image: {
        link: "http://afisha.orsk.ru/images/afisha/posters/o/1480929055966_14809290552426.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=http%3A%2F%2Fafisha.orsk.ru%2Fimages%2Fafisha%2Fposters%2Fo%2F1480929055966_14809290552426.jpg",
        height: 750,
        width: 529,
      },
    },
    {
      title: "Акции На Кофе В Магазинах Москвы - Mnogoblock.ru",
      snippet: "Акции На Кофе В Магазинах Москвы ",
      link: "https://mnogoblock.ru/%D0%B0%D0%BA%D1%86%D0%B8%D0%B8-%D0%BD%D0%B0-%D0%BA%D0%BE%D1%84%D0%B5-%D0%B2-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D0%B0%D1%85-%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D1%8B/",
      source: "mnogoblock.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2a0000017a0f8d9f6b271e9d7b4b6ea4437a-4351283-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2a0000017a0f8d9f6b271e9d7b4b6ea4437a-4351283-images-thumbs",
        height: 150,
        width: 105,
      },
      original_image: {
        link: "http://afisha.orsk.ru/images/afisha/posters/o/1480929055966_14809290552426.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=http%3A%2F%2Fafisha.orsk.ru%2Fimages%2Fafisha%2Fposters%2Fo%2F1480929055966_14809290552426.jpg",
        height: 750,
        width: 529,
      },
    },
    {
      title:
        "В Каком Магазине Кофе По Акции - Интернет Магазин по низким ценам",
      snippet:
        "q85/4px-BW84_n35GLuNaNXIkFGHOdejtbPNLyeHcYDICf9B-4XDtYZR5JgAGIo9uAhgecYMpML6zlQyEhG071U4cX9C0W7m-h8oZI2hTbqgQcWsDyPL1qwIaTJfBqI-sQsiMkE5L2omfchqLsUCR3-ATtuVrJfYEqLdf3Vq_xo_MNULDkgHDlX1AJvO-lqbAOWlbEkMZ_bJ5l7MYeBYG4kW2TrmyEO-PZtQYBdAGoIurHdiuF5VLbrOaSevylh... ",
      link: "https://tut-inet-magaz.ru/v-kakom-magazine-kofe-po-aktsii/",
      source: "tut-inet-magaz.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2a0000017a0f8d9f6b271e9d7b4b6ea4437a-4351283-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2a0000017a0f8d9f6b271e9d7b4b6ea4437a-4351283-images-thumbs",
        height: 150,
        width: 105,
      },
      original_image: {
        link: "http://afisha.orsk.ru/images/afisha/posters/o/1480929055966_14809290552426.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=http%3A%2F%2Fafisha.orsk.ru%2Fimages%2Fafisha%2Fposters%2Fo%2F1480929055966_14809290552426.jpg",
        height: 750,
        width: 529,
      },
    },
    {
      title: "Я-Ем Вкусненько, Великие Луки Фото, друзья, лайки",
      snippet: "Я-Ем Вкусненько, Великие Луки, Россия ",
      link: "https://list-vk.com/413462062/",
      source: "list-vk.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=ba31c627e2789af8d9fb621644650cfea0244a1a-8183104-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dba31c627e2789af8d9fb621644650cfea0244a1a-8183104-images-thumbs",
        height: 150,
        width: 106,
      },
      original_image: {
        link: "https://sun9-8.userapi.com/impf/c636924/v636924062/4e77f/8uMxeAct9lo.jpg?size=320x451&quality=96&sign=1d5f7fb4c1ae50e908d499bf6c0c7b6d&c_uniq_tag=5w57Pffb3Va_DbiOREIE9D4fSHNkDjd-HpUruUvD7xc&type=album",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun9-8.userapi.com%2Fimpf%2Fc636924%2Fv636924062%2F4e77f%2F8uMxeAct9lo.jpg%3Fsize%3D320x451%26quality%3D96%26sign%3D1d5f7fb4c1ae50e908d499bf6c0c7b6d%26c_uniq_tag%3D5w57Pffb3Va_DbiOREIE9D4fSHNkDjd-HpUruUvD7xc%26type%3Dalbum",
        height: 451,
        width: 320,
      },
    },
    {
      title:
        "Применение кофе с добавлением кардамона решат многие проблемы органов желудочно-кишечного тракта. Кардамон.. 2022 ВКонтакте",
      snippet:
        "Кардамон полезно применять, если у вас есть заболевания почек, он выводит из них кальций. ",
      link: "https://vk.com/wall270984164_1751",
      source: "vk.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=b2e591301b7c8cf0f4eb9734dd3ce9e9-4248551-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Db2e591301b7c8cf0f4eb9734dd3ce9e9-4248551-images-thumbs",
        height: 150,
        width: 139,
      },
      original_image: {
        link: "https://sun6-23.userapi.com/impg/2IV-oaPMOXSKwKFXrxKBTS3M8j7wy2LyrqgVxw/zZFsFS2DyZA.jpg?size=560x604&quality=96&sign=f436acff97c2f526d1dd04a8d4478446&type=album",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun6-23.userapi.com%2Fimpg%2F2IV-oaPMOXSKwKFXrxKBTS3M8j7wy2LyrqgVxw%2FzZFsFS2DyZA.jpg%3Fsize%3D560x604%26quality%3D96%26sign%3Df436acff97c2f526d1dd04a8d4478446%26type%3Dalbum",
        height: 604,
        width: 560,
      },
    },
    {
      title:
        "Применение кофе с добавлением кардамона решат многие проблемы... - TotalHub",
      snippet:
        "Применение кофе с добавлением кардамона решат многие проблемы. ",
      link: "https://totalhub.ru/id133/wall-7030586_Primenenie_kofe_s_dobavleniem_kardamona_reshat_mnogie_problemy/",
      source: "totalhub.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=b2e591301b7c8cf0f4eb9734dd3ce9e9-4248551-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Db2e591301b7c8cf0f4eb9734dd3ce9e9-4248551-images-thumbs",
        height: 150,
        width: 139,
      },
      original_image: {
        link: "https://sun9-12.userapi.com/impg/2IV-oaPMOXSKwKFXrxKBTS3M8j7wy2LyrqgVxw/zZFsFS2DyZA.jpg?size=560x604&quality=96&sign=f436acff97c2f526d1dd04a8d4478446&c_uniq_tag=oTmQuGE8PlUqp4RbK3iM9dHqAO4951HK8ph77UOPFYs&type=album",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun9-12.userapi.com%2Fimpg%2F2IV-oaPMOXSKwKFXrxKBTS3M8j7wy2LyrqgVxw%2FzZFsFS2DyZA.jpg%3Fsize%3D560x604%26quality%3D96%26sign%3Df436acff97c2f526d1dd04a8d4478446%26c_uniq_tag%3DoTmQuGE8PlUqp4RbK3iM9dHqAO4951HK8ph77UOPFYs%26type%3Dalbum",
        height: 604,
        width: 560,
      },
    },
    {
      title:
        "Применение кофе с добавлением кардамона решат многие проблемы органов желудочно-кишечного тракта. Кардамон.. 2022 ВКонтакте",
      snippet:
        "Применение кофе с добавлением кардамона решат многие проблемы органов желудочно-кишечного тракта. ",
      link: "https://vk.com/wall-213390805_1295",
      source: "vk.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=b2e591301b7c8cf0f4eb9734dd3ce9e9-4248551-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Db2e591301b7c8cf0f4eb9734dd3ce9e9-4248551-images-thumbs",
        height: 150,
        width: 139,
      },
      original_image: {
        link: "https://sun6-23.userapi.com/impg/2IV-oaPMOXSKwKFXrxKBTS3M8j7wy2LyrqgVxw/zZFsFS2DyZA.jpg?size=560x604&quality=96&sign=f436acff97c2f526d1dd04a8d4478446&type=album",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun6-23.userapi.com%2Fimpg%2F2IV-oaPMOXSKwKFXrxKBTS3M8j7wy2LyrqgVxw%2FzZFsFS2DyZA.jpg%3Fsize%3D560x604%26quality%3D96%26sign%3Df436acff97c2f526d1dd04a8d4478446%26type%3Dalbum",
        height: 604,
        width: 560,
      },
    },
    {
      title:
        "Применение кофе с добавлением кардамона решат многие проблемы органов желудочно-кишечного тракта. Кардамон.. 2022 ВКонтакте",
      link: "https://vk.com/wall376502521_1164",
      source: "vk.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=b2e591301b7c8cf0f4eb9734dd3ce9e9-4248551-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Db2e591301b7c8cf0f4eb9734dd3ce9e9-4248551-images-thumbs",
        height: 150,
        width: 139,
      },
      original_image: {
        link: "https://sun6-23.userapi.com/impg/2IV-oaPMOXSKwKFXrxKBTS3M8j7wy2LyrqgVxw/zZFsFS2DyZA.jpg?size=560x604&quality=96&sign=f436acff97c2f526d1dd04a8d4478446&type=album",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun6-23.userapi.com%2Fimpg%2F2IV-oaPMOXSKwKFXrxKBTS3M8j7wy2LyrqgVxw%2FzZFsFS2DyZA.jpg%3Fsize%3D560x604%26quality%3D96%26sign%3Df436acff97c2f526d1dd04a8d4478446%26type%3Dalbum",
        height: 604,
        width: 560,
      },
    },
    {
      title: "COFFEEprod - YouTube",
      snippet: "COFFEEprod - YouTube ",
      link: "https://www.youtube.com/channel/UCMZ0ZlCmlbFgXHMQNzZSzIw",
      source: "youtube.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=924edb519d98143695d3cefd0c606b7d7b1bf6bb-4900962-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D924edb519d98143695d3cefd0c606b7d7b1bf6bb-4900962-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://yt3.ggpht.com/ytc/AMLnZu_FvyURu0gk-YSWStO3_0SuPX6kKLPjhagJ9WMm=s900-c-k-c0x00ffffff-no-rj",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fyt3.ggpht.com%2Fytc%2FAMLnZu_FvyURu0gk-YSWStO3_0SuPX6kKLPjhagJ9WMm%3Ds900-c-k-c0x00ffffff-no-rj",
        height: 900,
        width: 900,
      },
    },
    {
      title: "Morgan Stock Stage - Home Facebook",
      snippet: "Performance art theatre in Monterey, California. ",
      link: "https://en-gb.facebook.com/pages/Morgan-Stock-Stage/182040318512231",
      source: "en-gb.facebook.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=49638171e2942e279c86549ce8d8f008-5233722-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D49638171e2942e279c86549ce8d8f008-5233722-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=257393465137065",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D257393465137065",
        height: 767,
        width: 767,
      },
    },
    {
      title: "Get a Free Web Page - Home Facebook",
      snippet: "I love coffee and Jazz Club. ",
      link: "https://business.facebook.com/unnegociolocalwebpage/",
      source: "business.facebook.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=49638171e2942e279c86549ce8d8f008-5233722-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D49638171e2942e279c86549ce8d8f008-5233722-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=257393465137065",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D257393465137065",
        height: 767,
        width: 767,
      },
    },
    {
      title: "Купить Кофе в регионе Рязань ВКонтакте",
      snippet: 'Кофе "Американо&quot ',
      link: "https://vk.com/market_catalog/ryazan/kofe",
      source: "vk.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=9a9c5b8f8c43eb5f887a4a45f5d4deca-5238450-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D9a9c5b8f8c43eb5f887a4a45f5d4deca-5238450-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://sun6-23.userapi.com/impg/-vMxtoYH1MS-hsmwygKf27sPs1kTDjyUJrEprA/g5QW131QXDQ.jpg?size=0x400&crop=0.298,0.02,0.608,0.973&quality=95&sign=6eb9d5f1256ee12f473fa34c8fa4291e",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun6-23.userapi.com%2Fimpg%2F-vMxtoYH1MS-hsmwygKf27sPs1kTDjyUJrEprA%2Fg5QW131QXDQ.jpg%3Fsize%3D0x400%26crop%3D0.298%2C0.02%2C0.608%2C0.973%26quality%3D95%26sign%3D6eb9d5f1256ee12f473fa34c8fa4291e",
        height: 400,
        width: 400,
      },
    },
    {
      title: 'Кофейня "Резон" ВКонтакте',
      snippet: 'Кофейня "Резон" ',
      link: "https://vk.com/public204283043",
      source: "vk.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=c18a8532ed90b77cf825e8a48efca2c1-4907535-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dc18a8532ed90b77cf825e8a48efca2c1-4907535-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://sun6-22.userapi.com/s/v1/ig2/CYeLtc8e7iMVthj84PSsI0lCG5DM-sW1XrMHYB7EYFl7zKJIIStK3OIqPlY_2aew-Yz96kx87qCQK7SktF0yuVOn.jpg?size=546x546&quality=95&crop=336,44,546,546&ava=1",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun6-22.userapi.com%2Fs%2Fv1%2Fig2%2FCYeLtc8e7iMVthj84PSsI0lCG5DM-sW1XrMHYB7EYFl7zKJIIStK3OIqPlY_2aew-Yz96kx87qCQK7SktF0yuVOn.jpg%3Fsize%3D546x546%26quality%3D95%26crop%3D336%2C44%2C546%2C546%26ava%3D1",
        height: 546,
        width: 546,
      },
    },
    {
      title:
        "SiempreDivinas - #fincadeosorio #Teror #naturaleza #nature Facebook",
      link: "https://www.facebook.com/permalink.php?story_fbid=1750815304966497&id=695621097152595",
      source: "facebook.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=49638171e2942e279c86549ce8d8f008-5233722-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D49638171e2942e279c86549ce8d8f008-5233722-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=257393465137065",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D257393465137065",
        height: 767,
        width: 767,
      },
    },
    {
      title: "Coffe Shop cool - Startseite Facebook",
      snippet: "Passwort vergessen? ",
      link: "https://de-de.facebook.com/pages/category/E-commerce-website/Coffe-Shop-cool-104872150984282/",
      source: "de-de.facebook.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=6c8bc5fe5d95f8ecaec2bdf3e5fa2aeb-4818367-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D6c8bc5fe5d95f8ecaec2bdf3e5fa2aeb-4818367-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=104872150984282",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D104872150984282",
        height: 400,
        width: 400,
      },
    },
    {
      title: "Марият Мухина (@doktormukhina) * Instagram ਫੋਟੋਆਂ ਅਤੇ ਵੀਡੀਓਜ਼",
      link: "https://www.instagram.com/doktormukhina/?hl=pa",
      source: "instagram.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=5e78b7d7a133722b32a0deb43bce61e3-5291151-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D5e78b7d7a133722b32a0deb43bce61e3-5291151-images-thumbs",
        height: 150,
        width: 150,
      },
      original_image: {
        link: "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/e35/122466018_730724787516016_5250188641312162634_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=Qq6pxN6n7r0AX9rae1m&tp=18&oh=e7440a8a36f7d88a7019d06ef8c1a827&oe=5FA1F8D1",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fscontent-arn2-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2F122466018_730724787516016_5250188641312162634_n.jpg%3F_nc_ht%3Dscontent-arn2-1.cdninstagram.com%26_nc_cat%3D104%26_nc_ohc%3DQq6pxN6n7r0AX9rae1m%26tp%3D18%26oh%3De7440a8a36f7d88a7019d06ef8c1a827%26oe%3D5FA1F8D1",
        height: 720,
        width: 720,
      },
    },
    {
      title: "Напитки",
      snippet: "Кофе чёрный ",
      link: "https://wapbirga.ru/bar/napitki/",
      source: "wapbirga.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=06f3e0ec2f89dd3cc6c9d2a7981c55a1-5879175-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D06f3e0ec2f89dd3cc6c9d2a7981c55a1-5879175-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://wapbirga.ru/bar/img/IMG-20200531-WA0012.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fwapbirga.ru%2Fbar%2Fimg%2FIMG-20200531-WA0012.jpg",
        height: 300,
        width: 400,
      },
    },
    {
      title:
        "Что будет с ценами на чай и кофе в следующем году Вечерний Харьков",
      link: "https://vecherniy.kharkov.ua/news/137962/",
      source: "vecherniy.kharkov.ua",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=28413c3567cbddfa6ae4c4a998846cef-5235777-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D28413c3567cbddfa6ae4c4a998846cef-5235777-images-thumbs",
        height: 123,
        width: 150,
      },
      original_image: {
        link: "https://vecherniy.kharkov.ua/i/2017/140854.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fvecherniy.kharkov.ua%2Fi%2F2017%2F140854.jpg",
        height: 148,
        width: 180,
      },
    },
    {
      title: "Уберечься от весенней аллергии поможет кофе Вечерний Харьков",
      link: "https://vecherniy.kharkov.ua/news/118680/",
      source: "vecherniy.kharkov.ua",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=28413c3567cbddfa6ae4c4a998846cef-5235777-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D28413c3567cbddfa6ae4c4a998846cef-5235777-images-thumbs",
        height: 123,
        width: 150,
      },
      original_image: {
        link: "https://vecherniy.kharkov.ua/i/2016/120299.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fvecherniy.kharkov.ua%2Fi%2F2016%2F120299.jpg",
        height: 148,
        width: 180,
      },
    },
    {
      title: "В Харькове пройдет чемпионат бариста Вечерний Харьков",
      snippet:
        "16-18 сентября в Харькове пройдет 10-й региональный чемпионат бариста (speciallity center Coffeemall, ул.Кооперативная, 6/8). ",
      link: "https://vecherniy.kharkov.ua/news/123965/",
      source: "vecherniy.kharkov.ua",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=28413c3567cbddfa6ae4c4a998846cef-5235777-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D28413c3567cbddfa6ae4c4a998846cef-5235777-images-thumbs",
        height: 123,
        width: 150,
      },
      original_image: {
        link: "https://vecherniy.kharkov.ua/i/2016/125956.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fvecherniy.kharkov.ua%2Fi%2F2016%2F125956.jpg",
        height: 148,
        width: 180,
      },
    },
    {
      title:
        "СМОТРИМ ГЛАВНОЕ, ВЕСТИ, ФИЛЬМЫ, СЕРИАЛЫ, ШОУ И ЭФИР РОССИЙСКИХ КАНАЛОВ",
      snippet:
        "СМОТРИМ ГЛАВНОЕ, ВЕСТИ, ФИЛЬМЫ, СЕРИАЛЫ, ШОУ И ЭФИР РОССИЙСКИХ КАНАЛОВ ",
      link: "https://smotrim.ru/audio/2564674",
      source: "smotrim.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=9a2416e6fc5f8015e9f7cd12ce9c84ecde7ce163-6321690-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D9a2416e6fc5f8015e9f7cd12ce9c84ecde7ce163-6321690-images-thumbs",
        height: 84,
        width: 150,
      },
      original_image: {
        link: "https://cdn-st2.rtr-vesti.ru/vh/pictures/hd/316/760/9.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fcdn-st2.rtr-vesti.ru%2Fvh%2Fpictures%2Fhd%2F316%2F760%2F9.jpg",
        height: 1080,
        width: 1920,
      },
    },
    {
      title: "Картинки С Кружкой Кофе - Telegraph",
      link: "https://telegra.ph/Kartinki-S-Kruzhkoj-Kofe-03-25",
      source: "telegra.ph",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=9a2416e6fc5f8015e9f7cd12ce9c84ecde7ce163-6321690-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D9a2416e6fc5f8015e9f7cd12ce9c84ecde7ce163-6321690-images-thumbs",
        height: 84,
        width: 150,
      },
      original_image: {
        link: "https://cdn-st2.rtr-vesti.ru/vh/pictures/hd/316/761/3.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fcdn-st2.rtr-vesti.ru%2Fvh%2Fpictures%2Fhd%2F316%2F761%2F3.jpg",
        height: 1080,
        width: 1920,
      },
    },
    {
      title: "Kinki Kristi",
      snippet: "Kinki Kristi ",
      link: "https://defect43.ru/sex/Kinki-Kristi.html",
      source: "defect43.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=9a2416e6fc5f8015e9f7cd12ce9c84ecde7ce163-6321690-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D9a2416e6fc5f8015e9f7cd12ce9c84ecde7ce163-6321690-images-thumbs",
        height: 84,
        width: 150,
      },
      original_image: {
        link: "https://cdn-st2.rtr-vesti.ru/vh/pictures/hd/316/761/3.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fcdn-st2.rtr-vesti.ru%2Fvh%2Fpictures%2Fhd%2F316%2F761%2F3.jpg",
        height: 1080,
        width: 1920,
      },
    },
    {
      title:
        "Агата Кристи. Убийство за чашкой кофе, 1992, радиоспектакль, слушать онлайн",
      snippet: "Агата Кристи. ",
      link: "https://smotrim.ru/brand/66294",
      source: "smotrim.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=9a2416e6fc5f8015e9f7cd12ce9c84ecde7ce163-6321690-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D9a2416e6fc5f8015e9f7cd12ce9c84ecde7ce163-6321690-images-thumbs",
        height: 84,
        width: 150,
      },
      original_image: {
        link: "https://cdn-st2.rtr-vesti.ru/vh/pictures/hd/316/761/3.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fcdn-st2.rtr-vesti.ru%2Fvh%2Fpictures%2Fhd%2F316%2F761%2F3.jpg",
        height: 1080,
        width: 1920,
      },
    },
    {
      title: "Поиск: Пуаро агаты кристи // Смотрим",
      link: "https://smotrim.ru/search?q=%D0%9F%D1%83%D0%B0%D1%80%D0%BE%20%D0%B0%D0%B3%D0%B0%D1%82%D1%8B%20%D0%BA%D1%80%D0%B8%D1%81%D1%82%D0%B8",
      source: "smotrim.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=8980a5fbf0ee261cb7bf4c5fa9f5dbc6-7013591-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D8980a5fbf0ee261cb7bf4c5fa9f5dbc6-7013591-images-thumbs",
        height: 84,
        width: 150,
      },
      original_image: {
        link: "https://cdn-st2.rtr-vesti.ru/vh/pictures/xw/316/761/3.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fcdn-st2.rtr-vesti.ru%2Fvh%2Fpictures%2Fxw%2F316%2F761%2F3.jpg",
        height: 405,
        width: 720,
      },
    },
    {
      title:
        "АУДИОКНИГА Записи в рубрике АУДИОКНИГА Дневник Scarlet5 : LiveInternet - Российский Сервис Онлайн-Дневников",
      link: "https://www.liveinternet.ru/users/scarlet5/rubric/1761218/profile",
      source: "liveinternet.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=8bbcd2985e20c3e6804308a0fd51fcec44d56de1-8497350-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D8bbcd2985e20c3e6804308a0fd51fcec44d56de1-8497350-images-thumbs",
        height: 84,
        width: 150,
      },
      original_image: {
        link: "https://img1.liveinternet.ru/images/attach/d/3/159/48/159048851_3.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimg1.liveinternet.ru%2Fimages%2Fattach%2Fd%2F3%2F159%2F48%2F159048851_3.jpg",
        height: 393,
        width: 699,
      },
    },
    {
      title: "Агата Кристи убийство за чашкой кофе аудиокнига с субтитрами",
      snippet:
        "Скачать видео Агата Кристи убийство за чашкой кофе аудиокнига с субтитрами. ",
      link: "https://sandrablog.net/agata-kristi-ubiystvo-za-chashkoy-kofe-audiokniga-s-subtitrami-xl-xf0gK_paOr4fPogmn4t-vi.html",
      source: "sandrablog.net",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=651383c999a84c882f0ef2c064f2c387-5887755-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D651383c999a84c882f0ef2c064f2c387-5887755-images-thumbs",
        height: 112,
        width: 150,
      },
      original_image: {
        link: "https://img.youtube.com/vi/K_paOr4fPog/0.jpg?3489220329",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FK_paOr4fPog%2F0.jpg%3F3489220329",
        height: 360,
        width: 480,
      },
    },
    {
      title:
        "АГАТА КРИСТИ. УБИЙСТВО ЗА ЧАШКОЙ КОФЕ. РАДИОПОСТАНОВКА ПО МОТИВАМ РАССКАЗА. Обсуждение на LiveInternet - Российский Сервис Онлай",
      snippet:
        "АУДИОКНИГА,ТЕАТР,дневник,комментарии,блог,блоги,агата,кристи.,убийство,чашкой,кофе.,радиопостановка,мотивам,рассказа ",
      link: "https://www.liveinternet.ru/users/scarlet5/post497083754/",
      source: "liveinternet.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=b3b086c18750d6b71431ce7065e6427418b75d7b-7669654-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Db3b086c18750d6b71431ce7065e6427418b75d7b-7669654-images-thumbs",
        height: 84,
        width: 149,
      },
      original_image: {
        link: "https://img1.liveinternet.ru/images/attach/d/3/159/48/159048851_preview_3.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimg1.liveinternet.ru%2Fimages%2Fattach%2Fd%2F3%2F159%2F48%2F159048851_preview_3.jpg",
        height: 84,
        width: 149,
      },
    },
  ],
  image_sizes: {
    large: [
      {
        size: "5616×3744",
        link: "https://img1.goodfon.com/original/5616x3744/2/1e/kofe-napitok-sahar-chashka.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimg1.goodfon.com%2Foriginal%2F5616x3744%2F2%2F1e%2Fkofe-napitok-sahar-chashka.jpg",
      },
      {
        size: "3840×2160",
        link: "https://storge.pic2.me/upload/516/61995aaef396d8.70219121.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fstorge.pic2.me%2Fupload%2F516%2F61995aaef396d8.70219121.jpg",
      },
      {
        size: "2880×1800",
        link: "https://img1.goodfon.ru/original/2880x1800/2/1e/kofe-napitok-sahar-chashka.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimg1.goodfon.ru%2Foriginal%2F2880x1800%2F2%2F1e%2Fkofe-napitok-sahar-chashka.jpg",
      },
      {
        size: "2048×2048",
        link: "https://img1.goodfon.ru/original/2048x2048/2/1e/kofe-napitok-sahar-chashka.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimg1.goodfon.ru%2Foriginal%2F2048x2048%2F2%2F1e%2Fkofe-napitok-sahar-chashka.jpg",
      },
      {
        size: "3200×1200",
        link: "https://img1.goodfon.ru/original/3200x1200/2/1e/kofe-napitok-sahar-chashka.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimg1.goodfon.ru%2Foriginal%2F3200x1200%2F2%2F1e%2Fkofe-napitok-sahar-chashka.jpg",
      },
      {
        size: "3360×1050",
        link: "https://img1.goodfon.ru/original/3360x1050/2/1e/kofe-napitok-sahar-chashka.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fimg1.goodfon.ru%2Foriginal%2F3360x1050%2F2%2F1e%2Fkofe-napitok-sahar-chashka.jpg",
      },
    ],
    medium: [
      {
        size: "1200×750",
        link: "https://pbs.twimg.com/media/D9MHUYPUEAAYUBj.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FD9MHUYPUEAAYUBj.jpg",
      },
      {
        size: "1123×724",
        link: "https://res.cloudinary.com/ddhklg6ze/image/upload/xtffpsjxodx6rsfsg9vp",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fres.cloudinary.com%2Fddhklg6ze%2Fimage%2Fupload%2Fxtffpsjxodx6rsfsg9vp",
      },
      {
        size: "1000×800",
        link: "https://pr0.zoon.ru/kyL2_xdclCGy2fJKUijUOQ/1000x800,q85/4px-BW84_n2cNG9FmsXqeGJNaKYhYU7LigVvB7rly9B49WvRYWwn9AdKyHdHoLD_HcjqP38JMqE0ikMEk63Dl4j6R-KrtFnSQGmt8-DNAMHgGwBQGnAuDNvtnqScmcqonKdESJkRqZIAzcXLjhSKgA",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fpr0.zoon.ru%2FkyL2_xdclCGy2fJKUijUOQ%2F1000x800%2Cq85%2F4px-BW84_n2cNG9FmsXqeGJNaKYhYU7LigVvB7rly9B49WvRYWwn9AdKyHdHoLD_HcjqP38JMqE0ikMEk63Dl4j6R-KrtFnSQGmt8-DNAMHgGwBQGnAuDNvtnqScmcqonKdESJkRqZIAzcXLjhSKgA",
      },
      {
        size: "1024×768",
        link: "https://avatars.dzeninfra.ru/get-zen_doc/5238100/pub_60d9b20c0ab7753d279e8150_60d9b3b65952c6703132b955/scale_1200",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.dzeninfra.ru%2Fget-zen_doc%2F5238100%2Fpub_60d9b20c0ab7753d279e8150_60d9b3b65952c6703132b955%2Fscale_1200",
      },
      {
        size: "960×800",
        link: "https://object.pscloud.io/cms/cms/Uploads/5233.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fobject.pscloud.io%2Fcms%2Fcms%2FUploads%2F5233.jpg",
      },
      {
        size: "1200×630",
        link: "https://1.bp.blogspot.com/-lBqWMX0iuaw/WAZhC7iuqaI/AAAAAAAAARs/UfVxj_9VPcUbbHsWK8Z5H3qpKEzyXee1gCLcB/w1200-h630-p-k-no-nu/artleo.com-146853.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2F1.bp.blogspot.com%2F-lBqWMX0iuaw%2FWAZhC7iuqaI%2FAAAAAAAAARs%2FUfVxj_9VPcUbbHsWK8Z5H3qpKEzyXee1gCLcB%2Fw1200-h630-p-k-no-nu%2Fartleo.com-146853.jpg",
      },
    ],
    small: [
      {
        size: "800×400",
        link: "https://storinka.com.ua/storage/source/10/_nuaOeQggJTwOo2pq6HJhvij39iMR64L.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fstorinka.com.ua%2Fstorage%2Fsource%2F10%2F_nuaOeQggJTwOo2pq6HJhvij39iMR64L.jpg",
      },
      {
        size: "690×460",
        link: "https://blog.168.am/wp-content/uploads/2018/02/16986.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fblog.168.am%2Fwp-content%2Fuploads%2F2018%2F02%2F16986.jpg",
      },
      {
        size: "770×400",
        link: "https://storage.myseldon.com/news-pict-1d/1DF33BDB00F5DF407238F8EF655FDE5A",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fstorage.myseldon.com%2Fnews-pict-1d%2F1DF33BDB00F5DF407238F8EF655FDE5A",
      },
      {
        size: "604×468",
        link: "https://sun9-6.userapi.com/impf/c630324/v630324810/1dfa9/xp_rpa6cpys.jpg?size=604x468&quality=96&sign=71cea6835fc46c14bdce0b0dad46456c&type=album",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsun9-6.userapi.com%2Fimpf%2Fc630324%2Fv630324810%2F1dfa9%2Fxp_rpa6cpys.jpg%3Fsize%3D604x468%26quality%3D96%26sign%3D71cea6835fc46c14bdce0b0dad46456c%26type%3Dalbum",
      },
      {
        size: "708×398",
        link: "https://zastavok.net/main/eda/153754699944.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fzastavok.net%2Fmain%2Feda%2F153754699944.jpg",
      },
      {
        size: "700×394",
        link: "https://yams.kufar.by/api/v1/kufar-ads/images/96/9669303569.jpg?rule=list_thumbs_2x",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fyams.kufar.by%2Fapi%2Fv1%2Fkufar-ads%2Fimages%2F96%2F9669303569.jpg%3Frule%3Dlist_thumbs_2x",
      },
    ],
  },
  image_tags: [
    {
      text: "чашка кофе",
      link: "https://yandex.com/images/search?text=%D1%87%D0%B0%D1%88%D0%BA%D0%B0%20%D0%BA%D0%BE%D1%84%D0%B5",
      serpapi_link:
        "https://serpapi.com/search.json?engine=yandex_images&text=%D1%87%D0%B0%D1%88%D0%BA%D0%B0+%D0%BA%D0%BE%D1%84%D0%B5",
    },
    {
      text: "чашечка кофе",
      link: "https://yandex.com/images/search?text=%D1%87%D0%B0%D1%88%D0%B5%D1%87%D0%BA%D0%B0%20%D0%BA%D0%BE%D1%84%D0%B5",
      serpapi_link:
        "https://serpapi.com/search.json?engine=yandex_images&text=%D1%87%D0%B0%D1%88%D0%B5%D1%87%D0%BA%D0%B0+%D0%BA%D0%BE%D1%84%D0%B5",
    },
    {
      text: "кофе",
      link: "https://yandex.com/images/search?text=%D0%BA%D0%BE%D1%84%D0%B5",
      serpapi_link:
        "https://serpapi.com/search.json?engine=yandex_images&text=%D0%BA%D0%BE%D1%84%D0%B5",
    },
    {
      text: "кофе эспрессо",
      link: "https://yandex.com/images/search?text=%D0%BA%D0%BE%D1%84%D0%B5%20%D1%8D%D1%81%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%BE",
      serpapi_link:
        "https://serpapi.com/search.json?engine=yandex_images&text=%D0%BA%D0%BE%D1%84%D0%B5+%D1%8D%D1%81%D0%BF%D1%80%D0%B5%D1%81%D1%81%D0%BE",
    },
    {
      text: "кофе чай",
      link: "https://yandex.com/images/search?text=%D0%BA%D0%BE%D1%84%D0%B5%20%D1%87%D0%B0%D0%B9",
      serpapi_link:
        "https://serpapi.com/search.json?engine=yandex_images&text=%D0%BA%D0%BE%D1%84%D0%B5+%D1%87%D0%B0%D0%B9",
    },
  ],
  similar_images: [
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=2546ea722f368a7b4bd05a231c5b73d9923062aa-4238413-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2546ea722f368a7b4bd05a231c5b73d9923062aa-4238413-images-thumbs%26n%3D13",
        height: 320,
        width: 480,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fimg1.goodfon.com%2Foriginal%2F5616x3744%2F2%2F1e%2Fkofe-napitok-sahar-chashka.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=7d6d77a88fb0d81969174728bae00510e8da7f6e-8182507-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D7d6d77a88fb0d81969174728bae00510e8da7f6e-8182507-images-thumbs%26n%3D13",
        height: 320,
        width: 160,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fi.pinimg.com%2F236x%2F44%2F16%2F56%2F44165638c83d8670823757bb9cff6274.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=1c627ca1e16a68f47c84b1c63fb46890c598b803-8326073-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D1c627ca1e16a68f47c84b1c63fb46890c598b803-8326073-images-thumbs%26n%3D13",
        height: 320,
        width: 320,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fpbs.twimg.com%2Fmedia%2FCgrptvdWwAQ-ziu%3Fformat%3Djpg%26name%3Dmedium&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=b465f5188edaae5f2460ab61220cf56602a4e714-4958261-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Db465f5188edaae5f2460ab61220cf56602a4e714-4958261-images-thumbs%26n%3D13",
        height: 320,
        width: 240,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fbasket-05.wb.ru%2Fvol839%2Fpart83951%2F83951185%2Fimages%2Fc246x328%2F7.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=0f7a754aa763d327274b5f7db09bff5b00c332dc-7552082-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D0f7a754aa763d327274b5f7db09bff5b00c332dc-7552082-images-thumbs%26n%3D13",
        height: 256,
        width: 320,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fsun9-47.userapi.com%2Fimpf%2Fc636924%2Fv636924570%2F78d34%2FDCbGMZ2br9o.jpg%3Fsize%3D320x256%26quality%3D96%26sign%3D0622cb527a83945a02a580fa3ee99dab%26c_uniq_tag%3DGmx2Ihvg0xN3TV7vCt1JnkucwAlex-0CY3O_LP868Z0%26type%3Dalbum&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=d1a3e85b7bbba0ed775743288e57b20e0e33564b-5474035-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dd1a3e85b7bbba0ed775743288e57b20e0e33564b-5474035-images-thumbs%26n%3D13",
        height: 48,
        width: 48,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fimages1.vinted.net%2Ft%2F03_00b56_P19WrfwPNZCdMK6vDEcXFxve%2F50x50%2F1641628940.jpeg%3Fs%3D5f35bd9f1f31eab617c3d30b4dce070b255c3eab&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=7be593c8ecbf3a4ffb85b56464324cb8dfb6c46e-7555069-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D7be593c8ecbf3a4ffb85b56464324cb8dfb6c46e-7555069-images-thumbs%26n%3D13",
        height: 320,
        width: 427,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB18dLPgGmWQ1JjSZPhq6xCJFXaU%2F5d-Diamond-Embroidery-DIY-Needlework-Diamond-Painting-Cross-Stitch-Full-Drill-Rhinestone-Coffee-Painting-Decor-AFC037.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=eb0f0c3ecfdb211df6a787ece2143c52-5344940-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Deb0f0c3ecfdb211df6a787ece2143c52-5344940-images-thumbs%26n%3D13",
        height: 250,
        width: 480,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fpbs.twimg.com%2Fmedia%2FEBnm-DKXUAEjqpy.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=2bb9b820bf0648aaa5fe0bd43eeef39e3925966c-7458047-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2bb9b820bf0648aaa5fe0bd43eeef39e3925966c-7458047-images-thumbs%26n%3D13",
        height: 320,
        width: 213,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fvashnarkolog.com%2Fwp-content%2Fuploads%2Fb%2F0%2F5%2Fb05545444ec005e52d1dacc68ce25b60.png%3Alarge&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=ee19476ff60f3350373de94e30c91f8e-5523440-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dee19476ff60f3350373de94e30c91f8e-5523440-images-thumbs%26n%3D13",
        height: 320,
        width: 378,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1_kXeF9BYBeNjy0Feq6znmFXam.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=b6c8db4c8180b538fbb27da1c93a82a6359f5dac-4117190-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Db6c8db4c8180b538fbb27da1c93a82a6359f5dac-4117190-images-thumbs%26n%3D13",
        height: 320,
        width: 238,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fbettina.the-peril.com%2Fdreamstime%2Fdreamstimelarge_29064496.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=e855e086d1ec41c12c81308e0d51a66a-5529899-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3De855e086d1ec41c12c81308e0d51a66a-5529899-images-thumbs%26n%3D13",
        height: 83,
        width: 480,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fcoffeelike.com.ua%2Fwp-content%2Fuploads%2F2017%2F05%2FMovenpick-cafe.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=c613c3227780d01abe3eb38d506044f4-5297754-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dc613c3227780d01abe3eb38d506044f4-5297754-images-thumbs%26n%3D13",
        height: 82,
        width: 480,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fcoffeelike.com.ua%2Fwp-content%2Fuploads%2F2017%2F05%2FMovenpick-%25D0%25BA%25D0%25BE%25D1%2584%25D0%25B5-1.png&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=1d546540327339e842dd7dab73fb760193bc142a-8240946-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D1d546540327339e842dd7dab73fb760193bc142a-8240946-images-thumbs%26n%3D13",
        height: 180,
        width: 320,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FiF22S6trKaE%2Fmqdefault.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=2a0000017a05a7587d8260f134ace78240f7-4518481-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2a0000017a05a7587d8260f134ace78240f7-4518481-images-thumbs%26n%3D13",
        height: 270,
        width: 480,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F-3HQc7FeOQE%2Fmaxresdefault.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=45a72912109654665528d456e2e8edeac1b024c2-7710221-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D45a72912109654665528d456e2e8edeac1b024c2-7710221-images-thumbs%26n%3D13",
        height: 320,
        width: 253,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fsun9-15.userapi.com%2Fimpf%2Fc637120%2Fv637120250%2F748c%2Fug5OdGgM5YQ.jpg%3Fsize%3D320x404%26quality%3D96%26sign%3D73c4707aad97a3a273d276ba92c55491%26c_uniq_tag%3DZ1mHqCtblCtuCWT0pvI0QevTwk7d8lQgV9QIi8AIQgc%26type%3Dalbum&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=68c78e060625a41d3cef4a1d5a8d187d4356a824-7058209-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D68c78e060625a41d3cef4a1d5a8d187d4356a824-7058209-images-thumbs%26n%3D13",
        height: 270,
        width: 480,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fpbs.twimg.com%2Fmedia%2FD40dEUAWwAEOrFh.png%3Alarge&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=6c3f6740ed5734d0e2a117481dc5b784-5240239-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D6c3f6740ed5734d0e2a117481dc5b784-5240239-images-thumbs%26n%3D13",
        height: 320,
        width: 410,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fa.tara-bajinabasta.com%2Flifehack%2FHow-to-Create-a-Hot-Beverage-Station-at-Home-3.webp&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=2a0000017a0f51dd08e4c794fa7d2afbe209-4474675-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2a0000017a0f51dd08e4c794fa7d2afbe209-4474675-images-thumbs%26n%3D13",
        height: 150,
        width: 150,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fscontent-hel3-1.cdninstagram.com%2Fv%2Ft51.12442-15%2Fe35%2Fc0.279.721.721a%2Fs150x150%2F89306155_107698244059847_2942608615360967191_n.jpg%3Ftp%3D1%26_nc_ht%3Dscontent-hel3-1.cdninstagram.com%26_nc_cat%3D111%26_nc_ohc%3DnzYKLBce9VUAX-_5CLs%26edm%3DAGW0Xe4BAAAA%26ccb%3D7-4%26oh%3Dbb80c72f97015d5f7e7dea4d088f7723%26oe%3D60A7A3BC%26_nc_sid%3Dacd11b&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=9e1fd8fc566a9b249aee68a982a67d91105f8d66-8199736-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D9e1fd8fc566a9b249aee68a982a67d91105f8d66-8199736-images-thumbs%26n%3D13",
        height: 252,
        width: 480,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fstatic.1000.menu%2Fimg%2Fcontent%2F27851%2Fkofeinyi-napitok-iz-yachmenya_1558172215_color_4944b7_hor.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=81f102558b54f4b03305b42fd37f5110-2440567-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D81f102558b54f4b03305b42fd37f5110-2440567-images-thumbs%26n%3D13",
        height: 200,
        width: 320,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fokvd-br.ru%2Fwp-content%2Fcache%2Fthumb%2F073649742_320x200.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=a19d9580f8073c66c305d45f15d6cbea0ee4fd68-7284491-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Da19d9580f8073c66c305d45f15d6cbea0ee4fd68-7284491-images-thumbs%26n%3D13",
        height: 320,
        width: 213,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fcup-coffee-brown-sugar-28555627.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=ad89944c91bde589d2f1b8cbff10140f-4210718-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dad89944c91bde589d2f1b8cbff10140f-4210718-images-thumbs%26n%3D13",
        height: 320,
        width: 415,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fcoffee-portal.ru%2Fimages%2Fkakkofevliyaetnadavlenieipuls_DF0BA2C5.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=11280ed19fafd0d21a3030efed2ce50a-5298642-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D11280ed19fafd0d21a3030efed2ce50a-5298642-images-thumbs%26n%3D13",
        height: 320,
        width: 226,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fi.pinimg.com%2Foriginals%2F8e%2F39%2F68%2F8e39685398ca73095e9a3952e0797e3d.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=7b2b0f2ec456f0548768b8c00b1688bb1304c073-6323775-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D7b2b0f2ec456f0548768b8c00b1688bb1304c073-6323775-images-thumbs%26n%3D13",
        height: 200,
        width: 200,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fsun9-3.userapi.com%2Fs%2Fv1%2Fig2%2FmxtBVAk69Fz3LZvkfun65W2pLKWw2ypxGmIF1b1AShXGVYJDdeb3nfg2qKBzduZHPXrJWnhr6qXJkgwjn6fO1pmR.jpg%3Fsize%3D50x50%26quality%3D95%26crop%3D46%2C0%2C352%2C352%26ava%3D1&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=a399376a62ac96acb553d5a73dce1c74ad3a9f07-5354373-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Da399376a62ac96acb553d5a73dce1c74ad3a9f07-5354373-images-thumbs%26n%3D13",
        height: 270,
        width: 480,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fskajite-a.ru%2F800%2F600%2Fhttps%2Fi.ytimg.com%2Fvi%2Fu3l4xyJIGaw%2Fmaxresdefault.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=e71f2d512a5f36232ba272c3734917a2cee8c0b6-7593510-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3De71f2d512a5f36232ba272c3734917a2cee8c0b6-7593510-images-thumbs%26n%3D13",
        height: 300,
        width: 450,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fi.pregnancytoddler.com%2Fimages%2F001%2Fimage-1266-24.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=6d4fd7031047d9f5c5911b048416c372-5886887-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D6d4fd7031047d9f5c5911b048416c372-5886887-images-thumbs%26n%3D13",
        height: 320,
        width: 211,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fimage.winudf.com%2Fv2%2Fimage1%2FY29tLmZpbG9zb2ZpLmtvcGlvaV9zY3JlZW5fMl8xNTY3ODc3MjgzXzA2Ng%2Fscreen-2.jpg%3Ffakeurl%3D1%26type%3D.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=8d18f5a83f0137b977b3b03b6d16bef03b9d8f05-8187767-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D8d18f5a83f0137b977b3b03b6d16bef03b9d8f05-8187767-images-thumbs%26n%3D13",
        height: 320,
        width: 247,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fcoffe-darom.ru%2Fupload%2Fiblock%2Fb4b%2Fqyk301u97892d93j62vts3uvzom7u5dv.png&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=05587caf53d0c09096b9f4a4834972f4e51fb755-8266553-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D05587caf53d0c09096b9f4a4834972f4e51fb755-8266553-images-thumbs%26n%3D13",
        height: 188,
        width: 300,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fvinospirt.ru%2Fwp-content%2Fpublic_images2%2F9a1cf605e9cf5ad38520a03d38228f1d-300x188.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=a8380f4199d69897581b064cd604d36261bfbe5f-7716469-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Da8380f4199d69897581b064cd604d36261bfbe5f-7716469-images-thumbs%26n%3D13",
        height: 252,
        width: 480,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fbestfacts.ru%2Fwp-content%2Fuploads%2F2019%2F09%2Fpolza-kofe-utrom.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=6ce1934506412849c2426561da9f3f7c-5874989-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D6ce1934506412849c2426561da9f3f7c-5874989-images-thumbs%26n%3D13",
        height: 320,
        width: 463,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D1801392160165875&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=c73ed679e831c6661f03fea0ee60eecc-5238482-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dc73ed679e831c6661f03fea0ee60eecc-5238482-images-thumbs%26n%3D13",
        height: 320,
        width: 320,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fscontent-hel3-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fsh0.08%2Fe35%2Fs640x640%2F122875199_406031690800194_1878180528978587365_n.jpg%3Ftp%3D1%26_nc_ht%3Dscontent-hel3-1.cdninstagram.com%26_nc_cat%3D106%26_nc_ohc%3D4q4BqsePr5AAX-kuFbU%26edm%3DAPU89FAAAAAA%26ccb%3D7-4%26oh%3D78a003b14ebe96be33ef3bd89e428b35%26oe%3D60ACCA0C%26_nc_sid%3D86f79a&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=bac413cee3ad477bdbbe20695f28d515-5234950-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dbac413cee3ad477bdbbe20695f28d515-5234950-images-thumbs%26n%3D13",
        height: 180,
        width: 320,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FJzDjD1s_2PM%2Fmqdefault.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=e1c1b46865c8a9681f98e47af0551b14-5645067-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3De1c1b46865c8a9681f98e47af0551b14-5645067-images-thumbs%26n%3D13",
        height: 180,
        width: 320,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F8SbI-VwQmI4%2Fmqdefault.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=cbbe809bca04f90d4957183b96bda0f8cc8ce20e-8311833-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dcbbe809bca04f90d4957183b96bda0f8cc8ce20e-8311833-images-thumbs%26n%3D13",
        height: 320,
        width: 479,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fassets.myfoodandfamily.com%2Fadaptivemedia%2Frendition%2F575038_1500x1000.tif%3Fid%3D9385bbd370cc45b12e673f8fb6ed653bec7b7206%26ht%3D650%26wd%3D1004&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=4a59ee1a3a62ed19970e8ae8d7ece574-4464285-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D4a59ee1a3a62ed19970e8ae8d7ece574-4464285-images-thumbs%26n%3D13",
        height: 215,
        width: 480,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2F28.img.avito.st%2Fimage%2F1%2FJTut17a_idLbcnvU6-s2KSd0j9gTtI0gH3SL1BVyi9IZMg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=cd21a7a45b2c13d579b97179edcd4195ded606a7-7679814-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dcd21a7a45b2c13d579b97179edcd4195ded606a7-7679814-images-thumbs%26n%3D13",
        height: 270,
        width: 480,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FObd06qFe5Oc%2Fmaxresdefault.jpg%3F7857057827&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=5e40090d54c7b92581f1a296ba2c701b13add87b-4590915-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D5e40090d54c7b92581f1a296ba2c701b13add87b-4590915-images-thumbs%26n%3D13",
        height: 320,
        width: 468,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fst3.depositphotos.com%2F1020804%2F18696%2Fi%2F1600%2Fdepositphotos_186967692-stock-photo-cup-of-coffee-and-brown.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=7750624b6760ec1428420dd1c385fd5c-5859452-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D7750624b6760ec1428420dd1c385fd5c-5859452-images-thumbs%26n%3D13",
        height: 180,
        width: 320,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F8752227%2F0LugLEh6nRjejDB3uK6Vxg5765%2Forig&img_url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FRkIWa0e7b2U%2Fmqdefault.jpg&rpt=imageview&cbir_id=8752227%2F0LugLEh6nRjejDB3uK6Vxg5765&cbir_page=similar",
    },
  ],
};
