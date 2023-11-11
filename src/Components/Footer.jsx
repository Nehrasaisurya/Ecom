import React from "react";
import styles from "./styles";

const Footer = () => {
  const Year = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Content",
          key: "hfhtrg",
          link: "https://goodfoods.vercel.app/aboutus",
        },
        {
          name: "How it Works",
          key: "sfnttrg",
          link: "https://www.hoobank.com/how-it-works/",
        },
        {
          name: "Create",
          key: "umyiutrg",
          link: "https://www.hoobank.com/create/",
        },
        {
          name: "Explore",
          key: "ztbtbrr",
          link: "https://goodfoods.vercel.app/aboutus",
        },
        {
          name: "Terms & Services",
          key: "rtnuyum",
          link: "https://www.hoobank.com/terms-and-services/",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: "Partners",
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: "Suggestions",
          link: "https://www.hoobank.com/suggestions/",
        },
        {
          name: "Blog",
          link: "https://www.hoobank.com/blog/",
        },
        {
          name: "Newsletters",
          link: "https://www.hoobank.com/newsletters/",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "https://www.hoobank.com/our-partner/",
        },
        {
          name: "Become a Partner",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
  ];

  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col lg:px-24 md:px-8 px-6 py-5 bg-[#e1998e] bg-opacity-90 text-black`}
    >
      <div
        className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full border-b border-b-white border-opacity-70`}
      >
        <div className="flex-1.5 flex flex-col justify-start mr-10">
          <p className="text-5xl text-black font-semibold tracking-wider">
            ECOM<span className="text-white">...</span>
          </p>
          <p className={`${styles.paragraph} mt-4 max-w-312px`}>
            Discover a World of Products, From Gadgets to Groceries, All in One
            Place!
          </p>
        </div>

        <div className="flex-1.5 w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className="flex flex-col my-4 min-w-150px"
            >
              <h4 className="font-poppins text-18px leading-27px font-semibold">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-16px leading-24px text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-1px border-t-#3F3E45">
        <p className="font-poppins font-normal text-18px leading-27px ">
          Copyright Ⓒ {Year}{" "}
          <span className="font-bold cursor-pointer px-1 text-white">ECOM</span>
          All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
