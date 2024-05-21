import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
const guides = [
  {
    ecommerce: {
      title:
        "12 Profitable Ecommerce Business Ideas You Can Start Today for 2024",
      desc: "Ready to open an online shop? Discover niche market products and innovative services to help you kickstart your online ecommerce store",
      author: "Izrael Samson",
      coverImg:
        "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/687d698a96f4eef875648319685ffeed-1687027332007/1685561103924-12profitableecommercebusinessideasyoucanstarttoday.jpg",
      summary: `Starting a traditional retail store presents challenges: rising overhead costs, limited reach, and market saturation.

      With ecommerce, you can now overcome these barriers, reach a global customer base, and achieve uncapped growth.
      
      But with more than five million businesses created in the US last year, competition is steep for startups. To help you choose your business idea for your online store, we’ve put together 12 innovative ecommerce ideas, along with their business model and projected market growth.
      
      We’ll also look at how you can start a lucrative ecommerce store, with insights from successful ecommerce entrepreneurs.`,
      title2: "Should you start an ecommerce business in 2023?",
      desc2: `Starting a new business? In this economy?

      Turns out, 2023 is the right time to do it. 
      
      Big Tech layoffs at Google, Meta, Microsoft, and Amazon mean experienced and highly skilled professionals are now available for hire. The silver lining of these widespread layoffs might be a more even distribution of top talent, giving startups the chance to compete in digital spaces.
      
      Ecommerce makes up 22% of sales ($3.3 trillion) and is likely to reach $5.4 trillion by 2026, according to Morgan Stanley. There has been no visible ceiling for ecommerce growth globally, indicating a major shift in the way people like to shop.
      
      “One of the biggest growth areas in tech for 2023 will be on Digital Main Street, in small online businesses like mobile apps, SaaS solutions, ecommerce stores, blogs, content-based websites, and other digital assets,” says Blake Hutchison, CEO of Flippa, in an op-ed on Entrepreneur.com.`,
      title3: "Top 12 profitable ecommerce business ideas:",
      links: [
        "1. Subscription boxes",
        "2. Print-on-Demand merchandise",
        "3. Dropshipping",
        "4. AR/VR products (headsets and other accessories)",
        "5. Smart home products",
        "6. Organic and natural products",
        "7. 3D printing",
        "8. Health and wellness products",
        "9. Online fitness programs",
        "10. Personalized gifts and accessories",
        "11. Digital products and courses",
        "12. Niche and specialized smartwatches",
        "How do I start a successful ecommerce store? Experts weigh in",
        "Hire an ecommerce online store manager today",
      ],
      linkDetails: [
        {
          title: "1. Subscription boxes",
          img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c76911335196180351f691a11a4e67bf-1687027396314/Screenshot%202023-05-20%20at%203.43.58%20AM.png",
          desc: `A subscription box is a curated collection of products tailored to specific interests. Customers sign up to receive a box monthly, or over a specified time period. A subscription box makes it easy for customers to reduce time spent shopping and get their favorite products delivered without needing to proactively restock. According to TBRC, the subscription box market shows no signs of slowing down, growing over 100% annually and with a current value of $10 billion. While the profit margin of subscription boxes can differ significantly across industries, the majority of them achieve a profit margin ranging from 40% to 60%. 

        For example, Dollar Shave Club has disrupted the grooming industry by delivering razors and other personal care products directly to subscribers. 
        
        Purple Carrot is a plant-based meal subscription box that delivers meal kits or prepared meals. You can also start a subscription box by curating third-party products. MunchPak is a snack curation subscription box that delivers snacks from all around the world.
        
        A subscription box ecommerce business requires distinct brand style and packaging design. Consider hiring a Fiverr freelancer to help with your design requirements.  `,
          img2: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c76911335196180351f691a11a4e67bf-1687027396311/Screenshot%202023-05-20%20at%204.07.16%20AM.png",
        },
        {
          title: "2. Print-on-Demand merchandise",
          img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c76911335196180351f691a11a4e67bf-1687027396315/Screenshot%202023-05-20%20at%204.17.29%20AM.png",
          desc: `Print-on-demand services provide entrepreneurs an opportunity to create custom-designed products, without the upfront costs of creating a large product inventory. The global custom t-shirt printing market was valued at $4.314 billion in 2022 and is expected to grow annually at 11.1% from 2023 to 2030, as reported by Grand View Research. Business owners can get an average profit margin of around 15% to 20%. 

          Redbubble is a platform where artists can showcase their unique designs and sell them on different products like t-shirts, mugs, or upholstery.

          You can choose to design your own products or hire a designer to do it for you. On Fiverr, you can access global talent for clothing and merchandise design.`,
          img2: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c76911335196180351f691a11a4e67bf-1687027396328/Screenshot%202023-05-20%20at%204.23.04%20AM.png",
        },
        {
          title: "3. Dropshipping",
          img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c76911335196180351f691a11a4e67bf-1687027396310/Screenshot%202023-05-20%20at%204.34.25%20AM.png",
          desc: `Dropshipping involves selling products without inventory management or order fulfillment. Instead, the retailer partners with a supplier and takes care of these aspects of the business. 

            This frees up the retailer to focus on other important aspects of the business, such as marketing and customer service. 
            
            Shopify, a leading ecommerce platform, offers an integration with Oberlo, a popular dropshipping app. This integration has made it easier than ever for entrepreneurs to get started with dropshipping. With just a few clicks, they can set up their online store and begin selling products from their supplier’s inventory. 
            
            Dropshippers typically maintain a profit margin within the range of 15% to 20%, as observed within the industry. In general, aiming to sell products above 10% of their wholesale price is a positive indicator for achieving a favorable profit.
            
            According to Grand View Research, the global dropshipping market size was valued at $225.99 billion in 2022 and is expected to register a compound annual growth rate (CAGR) of 23.4% from 2023 to 2030. 
            
            If setting up a dropshipping site seems like a mammoth task, you can delegate it to a Fiverr freelancer.`,
        },
        {
          title: "4. AR/VR products (headsets and other accessories)",
          img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/c76911335196180351f691a11a4e67bf-1687027396332/jessica-lewis-DeyfdybVQhA-unsplash.jpg",
          desc: `The augmented reality/virtual reality (AR/VR) market has witnessed remarkable growth in recent years and is poised for continued expansion. 

            According to Statista, revenue in the AR/VR market is projected to reach $31.12 billion in 2023. As more industries embrace AR/VR technology for applications such as gaming, education, health care, and entertainment, the demand for AR/VR products continues to rise.
            
            According to Forbes, Pokémon GO popularized augmented reality (AR) in the mainstream as a gaming app. Despite a decline in popularity, the app still earns $2 million daily, becoming the fastest game to reach $600 million revenue in three months. This makes the profit margins more than the investment. AR/VR headsets and accessories provide users with immersive experiences, transporting them to virtual worlds or overlaying digital information onto the real world. `,
        },
      ],
    },
  },
];
const GuidePage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);
  const detailRef = useRef();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/blog/getBlog/${id}`
        );
        setBlog(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBlogs();
  }, [id]);
  const urls = blog?.urls;
  const links = blog.links;
  const linkDetails = blog.linkDetails;
  console.log(linkDetails , links , urls);

  return (
    <>
      <Navbar />
      <div className="pt-36 px-14">
        <div className="mt-10 space-y-16 ">
          <p className="text-5xl font-extrabold text-gray">{blog.title}</p>
          <p className="text-xl font-medium text-gray">{blog.desc}</p>
          <p className="text-sm font-semibold text-lightGray">
            By: {blog.author}
          </p>
          <img src={urls && urls[0]} alt="" />
          <p className="text-lg font-semibold text-lightGray">{blog.summary}</p>
          <p className="text-3xl font-extrabold text-gray">{blog.title2}</p>
          <p className="text-lg font-semibold text-lightGray">{blog.desc2}</p>
          <p className="text-3xl font-extrabold text-gray">{blog.title3}</p>
          <div className="flex flex-col bg-extreamLightGreen p-10 rounded-lg space-y-2">
            {links && links.map((data, index) => {
              return (
                <p
                  className="text-lightBlue font-medium hover:text-blue cursor-pointer"
                  key={index}
                  onClick={() => {
                    detailRef?.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {data}
                </p>
              );
            })}
          </div>
          <div className="w-[900px] ml-52 space-y-20">
            {linkDetails && linkDetails.map((data, index) => {
              return (
                <div className="space-y-10" key={index}>
                  <p
                    className="text-3xl font-extrabold text-gray"
                    ref={detailRef}
                  >
                    {data.title}
                  </p>
                  {<img src={urls && urls[1 + index]} alt="" />}
                  <p className="text-lg font-semibold text-lightGray">
                    {data.desc}
                  </p>
                  {<img src={urls && urls[2 + index]} alt="" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GuidePage;
