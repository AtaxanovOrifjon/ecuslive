import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";


 export function  Banner() {

    const data = [
        {
          label: "Telefon",
          value: "html",
          images: [
            {
             name:"iphone 15 pro",
              imageLink:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQc8UUe0_06TB0hxTfEe1H8mMPglqXqT-0A&s",
            },
            {
                name:"iPhone 13 Pro",
              imageLink:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFaqiYKbbPMIR6zTwbEB2XEvK1v2FVCVLNtw&s",
            },
            {
                name:"Honor X8b",
              imageLink:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MZN8hb7QDum7jpaJtg3jF1Jww8vfdd73Zg&s",
            },
            {
                name:"Redmi Note 13 Pro+",
              imageLink:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS97_X7itBprieodQBrgqdHwwt556QbQ_D6Q&s",
            },
            {
                name:"Galaxy S24 Ultra",
              imageLink:
                "https://images.samsung.com/is/image/samsung/assets/uz_ru/home/2024-03/HOME_S24-Series_Main-KV_1440x640_pc_LTR_RU.jpg?imwidth=1366",
            },
            {
                name:"Spark 20",
              imageLink:
                "https://images.uzum.uz/cmkg03bifoubkc6ogvhg/original.jpg",
            },
          ],
        },
        {
          label: "Telivizor",
          value: "react",
          images: [
            {
              imageLink:
                "https://artelgroup.org/upload/articles/11-2.png",
            },
            {
              imageLink:
                "https://frankfurt.apollo.olxcdn.com/v1/files/slv7kq7drbwh3-UZ/image",
            },
            {
              imageLink:
                "https://shop.mts.ru/upload/images/televizor-xiaomi-mi-tv-a2-32-chernyj-4.jpg",
            },
            {
              imageLink:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMu5kUICkI-ShJs2Xl6G8xNMDFEDVSb0uOA&s",
            },
            {
              imageLink:
                "https://xiaomiexclusive.ru/files/AnyConv.com__A2_65.jpeg",
            },
            {
              imageLink:
                "https://mi-store.uz/wp-content/uploads/2024/02/7qdlggh8xvadyarz6sy302asp20ylmqa-min.jpg",
            },
          ],
        },
        {
          label: "Kampyuter",
          value: "vue",
          images: [
            {
              imageLink:
                "https://vyborok.com/wp-content/uploads/2020/08/monitor.jpg",
            },
            {
              imageLink:
                "https://cdn1.ozone.ru/s3/multimedia-p/6881245801.jpg",
            },
            {
              imageLink:
                "https://pcmarket.uz/wp-content/uploads/2020/05/config.png",
            },
            {
              imageLink:
                "https://s3p.kattabozor.uz/ri/4d1868689afb7dcbcab0e68a23ffc9543dec32b3b5ae2e326f634f5a19df3960_k9FY5T_640l.jpg",
            },
            {
              imageLink:
                "https://mtscdn.ru/upload/iblock/0b0/3.jpg",
            },
            {
              imageLink:
                "https://ae04.alicdn.com/kf/S21e01f3ba2014756a91548db5524e049U.jpg_480x480.jpg",
            },
          ],
        },
        {
          label: "SmartWatch",
          value: "angular",
          images: [
            {
              imageLink:
                "https://www.cnet.com/a/img/resize/770007077c38361ca13ef0b0aa4c208f88fa2053/hub/2023/09/20/9e9b8e2b-04ee-4087-b819-c99ec8bbc980/apple-watch-ultra-2-7.jpg?auto=webp&fit=crop&height=1200&width=1200",
            },
            {
              imageLink:
                "https://media.wired.com/photos/6511aab1189c419c40374c92/1:1/w_1358,h_1358,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg",
            },
            {
              imageLink:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB79y2KkgqccgjxFCyHeAWEqFJ9HExasl71Wv5jW_rmW1s1NyJ5t6a9vs3s3uBkJeIAHk&usqp=CAU",
            },
            {
              imageLink:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-daZfTARKF2flrEArS8ZklQKLZmNQ3OwKQ&s",
            },
            {
              imageLink:
                "https://www.komoot.com/images/integrations/smartwatch-polar-v002.jpg?width=800&height=800&crop=true&q=80",
            },
            {
              imageLink:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3Fmc-AsonIo-MZvDKRgOQnWFCc5hsWXjKQ&s",
            },
          ],
        },
        {
          label: "HeadPhones",
          value: "svelte",
          images: [
            {
              imageLink:
                "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LLFK?ver=29db&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
            },
            {
              imageLink:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-ZvO0fH-Y-PISSatzRvkuIeWlBsTkUu3oX_ezC_Cn0VRj45kPxm9AfRUzZY5pPvicoc&usqp=CAU",
            },
            {
              imageLink:
                "https://m.media-amazon.com/images/I/31sgMQm7K7L._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
            },
            {
              imageLink:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNhhfz9M_opn4QSgy55q8IEyu68LvWKHr3w&s",
            },
            {
              imageLink:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhlZGYS-z_l3Ks6Z3txe15SK-EfjCmipW4A&s",
            },
            {
              imageLink:
                "https://products.shureweb.eu/shure_product_db/product_main_images/files/b17/160/3d-/thumb_transparent/79067b7a13e5d750291198a916ee85d5.png",
            },
          ],
        },
      ];
  return (
    <Tabs value="html">
    <TabsHeader>
      {data.map(({ label, value }) => (
        <Tab key={value} value={value}>
          {label}
        </Tab>
      ))}
    </TabsHeader>
    <TabsBody className="grid grid-cols-1 gap-4 ">
      {data.map(({ value, images }) => (
        <TabPanel
          className="grid grid-cols-2 gap-4 md:grid-cols-3"
          key={value}
          value={value}
        >
          {images?.map(({ imageLink }, index) => (
            <div key={index}>
              <img
                className="aspect-video w-full max-w-full rounded-lg object-cover object-center"
                src={imageLink}
                alt="image-photo"
              />
            </div>
          ))}
        </TabPanel>
      ))}
    </TabsBody>
  </Tabs>
  )
}

