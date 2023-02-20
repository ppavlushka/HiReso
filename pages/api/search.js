export default function handler(req, res) {
  const { q } = req.query;
  //console.log(q);
  if (Math.random() < 0.5) {
    res
      .status(403)
      .json({ success: false, message: "Please, enter image URL" });
  }
  res.status(200).json({ ...result, q });
}

const result = {
  search_metadata: {
    id: "63036f46de983400a8612f2e",
    status: "Success",
    json_endpoint:
      "https://serpapi.com/searches/04bec3045036cebb/63036f46de983400a8612f2e.json",
    created_at: "2022-08-22 11:57:58 UTC",
    processed_at: "2022-08-22 11:57:59 UTC",
    yandex_images_url:
      "https://yandex.com/images/search/?url=https://img1.goodfon.com/original/5616x3744/2/1e/kofe-napitok-sahar-chashka.jpg&rpt=imageview",
    raw_html_file:
      "https://serpapi.com/searches/04bec3045036cebb/63036f46de983400a8612f2e.html",
    total_time_taken: 2.14,
  },
  search_parameters: {
    engine: "yandex_images",
    url: "https://img1.goodfon.com/original/5616x3744/2/1e/kofe-napitok-sahar-chashka.jpg",
  },
  image_preview: {
    image: {
      link: "https://avatars.mds.yandex.net/get-images-cbir/2052465/0LugLEh6nRjejDB3uK6Vxg9480/orig",
      serpapi_link:
        "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F2052465%2F0LugLEh6nRjejDB3uK6Vxg9480%2Forig",
      height: 5616,
      width: 3744,
    },
    crops: [
      {
        category: "кухонные принадлежности",
        is_product: true,
        crop_id: 0,
        crop: "0.3917459846;0.1636256874;0.8530742526;0.7154867649",
        serpapi_link:
          "https://serpapi.com/search.json?crop_id=0&engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F1647734%2F0LugLEh6nRjejDB3uK6Vxg6989%2Forig",
      },
      {
        category: "еда",
        is_product: true,
        crop_id: 2,
        crop: "0.1874042153;0.6628236771;0.2911816537;0.7975507975",
        serpapi_link:
          "https://serpapi.com/search.json?crop_id=2&engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F1647734%2F0LugLEh6nRjejDB3uK6Vxg6989%2Forig",
      },
    ],
  },
  image_results: [
    {
      title:
        "Download wallpaper coffee, Cup, sugar, drink, section food in resolution 5616x3744",
      snippet:
        "Download wallpaper coffee, Cup, sugar, drink, section food in resolution 5616x3744 ",
      link: "https://avto.goodfon.com/download/kofe-napitok-sahar-chashka/5616x3744/",
      source: "avto.goodfon.com",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=2546ea722f368a7b4bd05a231c5b73d9-5310530-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2546ea722f368a7b4bd05a231c5b73d9-5310530-images-thumbs",
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
      title:
        "Кофе способен защитить организм человека от образования камней в почках - Solenka.info - Мировые новости и светская хроника шоу-",
      link: "https://solenka.info/kofe-pomozhet-zashhitit-organizm-cheloveka-ot-obrazovanija-kamnej-v-pochkah.html",
      source: "solenka.info",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=61e7e89fdff41ff572b5e0b968184f99-5275568-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D61e7e89fdff41ff572b5e0b968184f99-5275568-images-thumbs",
        height: 93,
        width: 150,
      },
      original_image: {
        link: "https://solenka.info/wp-content/uploads/2021/10/kofe-bez-kofeina-poleznye-svojstva-i-protivopokazaniya-1.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fsolenka.info%2Fwp-content%2Fuploads%2F2021%2F10%2Fkofe-bez-kofeina-poleznye-svojstva-i-protivopokazaniya-1.jpg",
        height: 1200,
        width: 1920,
      },
    },
    {
      title:
        "Ответы Mail.ru: Вы можете прожить без кофе? и чем то его заменить?",
      snippet:
        "Ответы Mail.ru: Вы можете прожить без кофе? и чем то его заменить? ",
      link: "https://otvet.mail.ru/question/213974089",
      source: "otvet.mail.ru",
      thumbnail: {
        link: "https://avatars.mds.yandex.net/i?id=28ea54bb0ee2086e22d5672566784991-4216669-images-thumbs",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D28ea54bb0ee2086e22d5672566784991-4216669-images-thumbs",
        height: 93,
        width: 150,
      },
      original_image: {
        link: "https://otvet.imgsmail.ru/download/u_a615293f7cf515f30749ed4f2f3c156a.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fotvet.imgsmail.ru%2Fdownload%2Fu_a615293f7cf515f30749ed4f2f3c156a.jpg",
        height: 1200,
        width: 1920,
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
        size: "3000×2000",
        link: "https://ne-kurim.ru/forum/attachments/1560352526727-png.926429/",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fne-kurim.ru%2Fforum%2Fattachments%2F1560352526727-png.926429%2F",
      },
    ],
    medium: [
      {
        size: "1200×750",
        link: "https://avatars.mds.yandex.net/get-zen_doc/4457971/pub_62356f7207c2780d76c04974_62356f9bc0d1f063017c9e86/scale_1200",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-zen_doc%2F4457971%2Fpub_62356f7207c2780d76c04974_62356f9bc0d1f063017c9e86%2Fscale_1200",
      },
      {
        size: "1080×800",
        link: "https://pbs.twimg.com/media/FPJNs5hWUAY6dZE.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFPJNs5hWUAY6dZE.jpg",
      },
      {
        size: "1235×692",
        link: "https://u.9111s.ru/uploads/202202/02/214501130e6216279946abbcaaa6bb3f.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fu.9111s.ru%2Fuploads%2F202202%2F02%2F214501130e6216279946abbcaaa6bb3f.jpg",
      },
    ],
    small: [
      {
        size: "768×432",
        link: "https://www.afdal.best/wp-content/uploads/2022/05/%D8%A3%D9%81%D8%B6%D9%84-10-%D8%A3%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D9%82%D9%87%D9%88%D8%A9-%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A%D8%A9-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1-768x432.webp",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fwww.afdal.best%2Fwp-content%2Fuploads%2F2022%2F05%2F%25D8%25A3%25D9%2581%25D8%25B6%25D9%2584-10-%25D8%25A3%25D9%2586%25D9%2588%25D8%25A7%25D8%25B9-%25D8%25A7%25D9%2584%25D9%2582%25D9%2587%25D9%2588%25D8%25A9-%25D8%25A7%25D9%2584%25D9%2581%25D8%25B1%25D9%2586%25D8%25B3%25D9%258A%25D8%25A9-%25D9%2581%25D9%258A-%25D9%2585%25D8%25B5%25D8%25B1-768x432.webp",
      },
      {
        size: "670×483",
        link: "https://ostrov-sladostey.ru/wp-content/uploads/kogda-pit-kofe2.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fostrov-sladostey.ru%2Fwp-content%2Fuploads%2Fkogda-pit-kofe2.jpg",
      },
      {
        size: "800×400",
        link: "https://storinka.com.ua/storage/source/10/_nuaOeQggJTwOo2pq6HJhvij39iMR64L.jpg",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Fstorinka.com.ua%2Fstorage%2Fsource%2F10%2F_nuaOeQggJTwOo2pq6HJhvij39iMR64L.jpg",
      },
    ],
  },
  shopping_results: {
    category: "products",
    crops: [
      {
        category: "Full image",
        link: "https://yandex.com/images/search/?rpt=imageview&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F2052465%2F0LugLEh6nRjejDB3uK6Vxg9480%2Forig&cbir_page=products",
      },
      {
        category: "Кухонные принадлежности",
        link: "https://yandex.com/images/search/?rpt=imageview&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F2052465%2F0LugLEh6nRjejDB3uK6Vxg9480%2Forig&crop_id=0&cbir_page=products",
        crop_id: "0",
        crop: "0.3917459846;0.1636257172;0.8530741334;0.7154867649",
      },
      {
        category: "Еда",
        link: "https://yandex.com/images/search/?rpt=imageview&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F2052465%2F0LugLEh6nRjejDB3uK6Vxg9480%2Forig&crop_id=2&cbir_page=products",
        crop_id: "2",
        crop: "0.1874042153;0.6628236771;0.2911816537;0.7975507975",
      },
    ],
    products: [
      {
        title:
          "Красный апельсин / кофе в зернах / кофе зерновой / турецкий кофе / кофе / зерновой кофе / кофе зерновое / зерновое кофе / вкусный кофе",
        link: "https://market.yandex.com/product--krasnyi-apelsin-kofe-v-zernakh-kofe-zernovoi-turetskii-kofe-kofe-zernovoi-kofe-kofe-zernovoe-zernovoe-kofe-vkusnyi-kofe/1736564256?utm_source_service=img&icookie=Ob4bXHskJqp%2Fawu7kmhWuwNd3JzVaUBHGJU4iHnlgNFHjHITKSHV8XiopeuQuc9advZmjm2OdlAC%2FOEpBnQknwZmJfs%3D&wprid=1661169480665375-8631934596106796759-sas2-0472-sas-l7-balancer-8080-BAL-8959&src_pof=932&lr=87",
        image: {
          link: "https://avatars.mds.yandex.net/i?id=a511316d5cc133c375d3529e553e0b21-5251742-images-thumbs&n=13",
          serpapi_link:
            "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Da511316d5cc133c375d3529e553e0b21-5251742-images-thumbs%26n%3D13",
          height: 2974,
          width: 2974,
        },
      },
      {
        title:
          "Картина по номерам триптих Paintboy PX 5175 Аромат кофе 3 шт. 40x50 см",
        link: "https://market.yandex.com/product--kartina-po-nomeram-triptikh-paintboy-px-5175-aromat-kofe-3-sht-40x50-sm/818434427?utm_source_service=img&icookie=Ob4bXHskJqp%2Fawu7kmhWuwNd3JzVaUBHGJU4iHnlgNFHjHITKSHV8XiopeuQuc9advZmjm2OdlAC%2FOEpBnQknwZmJfs%3D&wprid=1661169480665375-8631934596106796759-sas2-0472-sas-l7-balancer-8080-BAL-8959&src_pof=932&lr=87",
        image: {
          link: "https://avatars.mds.yandex.net/i?id=f786b5227639b8ccffff03823a0bb844-4669930-images-thumbs&n=13",
          serpapi_link:
            "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Df786b5227639b8ccffff03823a0bb844-4669930-images-thumbs%26n%3D13",
          height: 352,
          width: 804,
        },
      },
      {
        title:
          "Белый Арап Карамельный кофейный напиток растворимый 3 в 1, 50 пакетиков",
        link: "https://market.yandex.com/product--belyi-arap-karamelnyi-kofeinyi-napitok-rastvorimyi-3-v-1-50-paketikov/1416852514?utm_source_service=img&icookie=Ob4bXHskJqp%2Fawu7kmhWuwNd3JzVaUBHGJU4iHnlgNFHjHITKSHV8XiopeuQuc9advZmjm2OdlAC%2FOEpBnQknwZmJfs%3D&wprid=1661169480665375-8631934596106796759-sas2-0472-sas-l7-balancer-8080-BAL-8959&src_pof=932&lr=87",
        image: {
          link: "https://avatars.mds.yandex.net/i?id=ad2be167e0927d70adcf9e6f4eea11c4-4599655-images-thumbs&n=13",
          serpapi_link:
            "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dad2be167e0927d70adcf9e6f4eea11c4-4599655-images-thumbs%26n%3D13",
          height: 852,
          width: 756,
        },
      },
    ],
    more_products_link:
      "https://yandex.com/images/search/?rpt=imageview&url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F2052465%2F0LugLEh6nRjejDB3uK6Vxg9480%2Forig&cbir_id=2052465%2F0LugLEh6nRjejDB3uK6Vxg9480&cbir_page=products",
  },
  image_tags: [
    {
      text: "кофе чашка",
      link: "https://yandex.com/images/search?text=%D0%BA%D0%BE%D1%84%D0%B5%20%D1%87%D0%B0%D1%88%D0%BA%D0%B0",
      serpapi_link:
        "https://serpapi.com/search.json?engine=yandex_images&text=%D0%BA%D0%BE%D1%84%D0%B5+%D1%87%D0%B0%D1%88%D0%BA%D0%B0",
    },
    {
      text: "чашечка кофе",
      link: "https://yandex.com/images/search?text=%D1%87%D0%B0%D1%88%D0%B5%D1%87%D0%BA%D0%B0%20%D0%BA%D0%BE%D1%84%D0%B5",
      serpapi_link:
        "https://serpapi.com/search.json?engine=yandex_images&text=%D1%87%D0%B0%D1%88%D0%B5%D1%87%D0%BA%D0%B0+%D0%BA%D0%BE%D1%84%D0%B5",
    },
    {
      text: "кофе с сахаром",
      link: "https://yandex.com/images/search?text=%D0%BA%D0%BE%D1%84%D0%B5%20%D1%81%20%D1%81%D0%B0%D1%85%D0%B0%D1%80%D0%BE%D0%BC",
      serpapi_link:
        "https://serpapi.com/search.json?engine=yandex_images&text=%D0%BA%D0%BE%D1%84%D0%B5+%D1%81+%D1%81%D0%B0%D1%85%D0%B0%D1%80%D0%BE%D0%BC",
    },
  ],
  similar_images: [
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=2546ea722f368a7b4bd05a231c5b73d9-5310530-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D2546ea722f368a7b4bd05a231c5b73d9-5310530-images-thumbs%26n%3D13",
        height: 320,
        width: 480,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F2052465%2F0LugLEh6nRjejDB3uK6Vxg9480%2Forig&img_url=http%3A%2F%2Fimg1.goodfon.com%2Foriginal%2F5616x3744%2F2%2F1e%2Fkofe-napitok-sahar-chashka.jpg&rpt=imageview&cbir_id=2052465%2F0LugLEh6nRjejDB3uK6Vxg9480&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=fb5ae75126a49996b66b07d70e28387e-5347144-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3Dfb5ae75126a49996b66b07d70e28387e-5347144-images-thumbs%26n%3D13",
        height: 320,
        width: 320,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F2052465%2F0LugLEh6nRjejDB3uK6Vxg9480%2Forig&img_url=http%3A%2F%2Fpsyoffice.ru%2Fuploads%2Fnews%2F18%2F2019%2F2019-09-0%2Farticle-152824-1.jpg&rpt=imageview&cbir_id=2052465%2F0LugLEh6nRjejDB3uK6Vxg9480&cbir_page=similar",
    },
    {
      image: {
        link: "https://avatars.mds.yandex.net/i?id=06473839e0b29dcbbbbed9558c91f2bf-5277521-images-thumbs&n=13",
        serpapi_link:
          "https://serpapi.com/search.json?engine=yandex_images&url=https%3A%2F%2Favatars.mds.yandex.net%2Fi%3Fid%3D06473839e0b29dcbbbbed9558c91f2bf-5277521-images-thumbs%26n%3D13",
        height: 320,
        width: 240,
      },
      link: "https://yandex.com/images/search?url=https%3A%2F%2Favatars.mds.yandex.net%2Fget-images-cbir%2F2052465%2F0LugLEh6nRjejDB3uK6Vxg9480%2Forig&img_url=http%3A%2F%2Fimages.wildberries.ru%2Fbig%2Fnew%2F2160000%2F2168182-1.jpg&rpt=imageview&cbir_id=2052465%2F0LugLEh6nRjejDB3uK6Vxg9480&cbir_page=similar",
    },
  ],
};
