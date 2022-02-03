import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-green pt-lg-40 pb-lg-40 pt-30 pb-50">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <Image
                src="/img/logo.png"
                width={138}
                height={40}
                alt="NEON logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                <li className="nav-item my-auto">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#browser"
                  >
                    Neon Browser
                  </a>
                </li>
                <li className="nav-item my-auto">
                  <a className="nav-link" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item my-auto">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>

                <li className="nav-item my-auto me-127">
                  <a className="nav-link" href="#support">
                    Support
                  </a>
                </li>

                <li className="nav-item my-auto ">
                  <a
                    className="btn btn-sign-in d-flex justify-content-center ms-lg-2"
                    href="#download"
                    role="button"
                  >
                    Download Neon
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section className="header pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="row gap-lg-0 gap-5 d-flex align-items-center">
            <div className="col-lg-7 col-12 left">
              <div className="col-3 text-center">
                <p className="text-top text-white fw-medium">Hot Browser</p>
              </div>
              <h1 className="header-title fw-medium mt-32">
                All in-one browser for your daily internet.
              </h1>
              <p className="mt-40 mb-56 text-lg">
                NEON is a web browser initially released for mobile devices on
                Android platform.
              </p>
              <div className="d-flex flex-lg-row flex-column">
                <a
                  className="btn btn-download text-lg mb-5"
                  href="#download"
                  role="button"
                >
                  <Image
                    src="/icon/logo-apk.png"
                    width={36}
                    height={20}
                    alt="Download for Android"
                  />
                  <span className="ms-3 ">Download for Android</span>
                </a>
              </div>
            </div>
            <div className="col-lg-5 position-relative">
              <img
                src="/img/img-header-right.png"
                className="img-fluid position-absolute img-header"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="header-bottom pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="row gap-lg-0 gap-5">
            <div className="col-lg-8 col-12 ">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-us d-flex align-items-center">
                    <div className="about-left">
                      <Image
                        src="/icon/about--us.png"
                        width={100}
                        height={120}
                      />
                    </div>
                    <div className="about-right">
                      <span className="name fw-semibold">About Us</span>

                      <p className="title fw-semibold">
                        Why Neon will improve <br /> your browsing experience
                      </p>

                      <a href="#leanmore" className="learn-more">
                        Learn More
                        <img
                          src="/icon/arraow-bottom.png"
                          width={8}
                          height={8}
                          className="ms-3"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="features d-flex align-items-center">
                    <div className="features-left">
                      <Image
                        src="/icon/features.png"
                        width={100}
                        height={120}
                      />
                    </div>
                    <div className="features-right">
                      <span className="name fw-semibold">About Us</span>

                      <p className="title fw-semibold">
                        Why Neon will improve <br /> your browsing experience
                      </p>

                      <a href="#leanmore" className="learn-more">
                        Learn More
                        <img
                          src="/icon/arraow-bottom.png"
                          width={8}
                          height={8}
                          className="ms-3"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="multiple-profile pt-200">
        <div className="container-xxl container-fluid">
          <div className="row">
            <div className="col-lg-6 col-12 ">
              <div className="profile-left">
                <div className="name d-flex align-items-center">
                  <Image
                    src="/icon/multiple-profile.png"
                    width={24}
                    height={24}
                  />
                  <span className="ms-3 fw-semibold">Multiple Profiles</span>
                </div>
                <div className="title fw-medium">
                  NEON Browser comes with multiple profile feature which does
                  not exist in currently available mobile browsers.
                </div>
                <div className="description fw-medium">
                  By using this feature user can create separate browser profile
                  to different purposes. Each profile works like completely
                  different browser.
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="ps-40">
                <img
                  src="/img/multiple-profile-right.png"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="built-in pt-210">
        <div className="container-xxl container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="built-top text-center">
                <Image
                  src="/icon/built-in.png"
                  width={24}
                  height={24}
                  className="mb-16"
                />
                <h4 className="name mt-16 pb-24">Built-in Proxy</h4>
                <h2 className="title pb-24">
                  NEON browser comes with built-in proxy feature. It helps user
                  <br />
                  to hide their real IP address while browsing websites.
                </h2>
                <h3 className="description">
                  User can use different proxy for each profile at same time.
                  That’s means user can use France proxy for one <br /> profile
                  and Canada proxy for another profile at same time to surf
                  internet.
                </h3>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="built-bottom">
                <img
                  src="/img/built-in-banner.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ad-block pt-200">
        <div className="container-xxl container-fluid">
          <div className="row">
            <div className="col-lg-6 col-12 ">
              <div className="profile-left">
                <div className="name d-flex align-items-center">
                  <Image src="/icon/adblock.png" width={24} height={24} />
                  <span className="ms-3 fw-semibold">AdBlocker</span>
                </div>
                <div className="title fw-medium">
                  NEON browser comes with built-in <br /> AdBlocker and user no
                  need to <br /> install other extensions or apps for
                  ad-blocking purpose.
                </div>
                <div className="description fw-medium">
                  User can enable or disable AdBlocker profile level. User can
                  also enable or disable AdBlocker for any particular site from
                  permissions panel. Which is available at settings menu
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="ps-40">
                <img src="/img/adblock-right.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="multi-download pt-200">
        <div className="container-xxl container-fluid">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="ps-40">
                <img src="/img/multi-download-left.png" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-12 ">
              <div className="profile-left">
                <div className="name d-flex align-items-center">
                  <Image src="/icon/adblock.png" width={24} height={24} />
                  <span className="ms-3 fw-semibold">
                    Multi Threaded Downloader
                  </span>
                </div>
                <div className="title fw-medium">
                  NEON Browser comes with built-in <br /> multi threaded
                  download manager.
                </div>
                <div className="description fw-medium">
                  Normally browsers use only one thread to download files from
                  internet. But, NEON uses multiple threads to download file
                  from internet. By using multiple threads download speed will
                  increase a lot.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="other-feature pt-200">
        <div className="container-xxl container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="other-top text-center">
                <Image
                  src="/icon/other-feature.png"
                  width={24}
                  height={24}
                  className="mb-16"
                />
                <h4 className="name mt-16 pb-24">Other Features</h4>
                <h2 className="title pb-100">
                  Other Features why we are the best for you
                </h2>
              </div>
            </div>
            <div className="col-lg-11 col-12">
              <div className="row other-bottom">
                <div className="col-md-4">
                  <div className="d-flex justify-content-center">
                    <img
                      src="/img/other-1.png"
                      alt=""
                      width={248}
                      className="img-fluid"
                    />
                  </div>
                  <div className="desc">
                    <h3>NEON Browser comes in just 2MB App Size.</h3>
                    <h4>
                      Gives all above feature at this small size. So, it
                      occupies very less space on device.
                    </h4>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex justify-content-center">
                    <img
                      src="/img/other-2.png"
                      alt=""
                      width={248}
                      className="img-fluid"
                    />
                  </div>
                  <div className="desc">
                    <h3>
                      NEON Browser comes with unlimited colour themes feature.
                    </h3>
                    <h4>
                      Gives all above feature at this small size. So, it
                      occupies very less space on device.
                    </h4>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex justify-content-center">
                    <img
                      src="/img/other-3.png"
                      alt=""
                      width={248}
                      className="img-fluid"
                    />
                  </div>
                  <div className="desc">
                    <h3>
                      User can surf websites in desktop mode on mobile devices.
                    </h3>
                    <h4>
                      Gives all above feature at this small size. So, it
                      occupies very less space on device.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq pt-100">
        <div className="container-xxl container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-12 ">
              <div className="top">
                <img src="/img/logo-circle.png" alt="" className="img-fluid" />
              </div>
              <div className="bottom d-flex">
                <div className="align-items-center">
                  <a
                    className="btn btn-download text-lg mb-142"
                    href="#download"
                    role="button"
                  >
                    <Image
                      src="/icon/apk-white.png"
                      width={36}
                      height={20}
                      alt="Download for Android"
                    />
                    <span className="ms-3 ">Download for Android</span>
                  </a>
                </div>
                <div className="align-items-center">
                  <a
                    className="btn btn-ios text-lg mb-142"
                    href="#ios"
                    role="button"
                  >
                    <Image
                      src="/icon/ios.png"
                      width={19}
                      height={23}
                      alt="Download for IOS"
                    />
                    <span className="ms-3 ">Available soon on IOS</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="position-relative">
                <div
                  className="accordion mt-100 position-absolute"
                  id="accordionExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is Neon Browser?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        NEON is a web browser initially released for android
                        mobile devices. Android 9 or above version is required
                        for multiple profile feature. Currently 70% of android
                        devices are running on 9 and above version.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Is Neon safe for my mobile device?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum maiores provident ad molestiae voluptatibus
                        consequuntur necessitatibus, dolores odit hic nostrum ex
                        possimus neque ducimus. Esse reiciendis et ducimus
                        minima consequatur?
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Is Desktop view available?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum maiores provident ad molestiae voluptatibus
                        consequuntur necessitatibus, dolores odit hic nostrum ex
                        possimus neque ducimus. Esse reiciendis et ducimus
                        minima consequatur?
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Is this browser free?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum maiores provident ad molestiae voluptatibus
                        consequuntur necessitatibus, dolores odit hic nostrum ex
                        possimus neque ducimus. Esse reiciendis et ducimus
                        minima consequatur?
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        How to download the browser?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum maiores provident ad molestiae voluptatibus
                        consequuntur necessitatibus, dolores odit hic nostrum ex
                        possimus neque ducimus. Esse reiciendis et ducimus
                        minima consequatur?
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        How to update the browser?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum maiores provident ad molestiae voluptatibus
                        consequuntur necessitatibus, dolores odit hic nostrum ex
                        possimus neque ducimus. Esse reiciendis et ducimus
                        minima consequatur?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.690633198891!2d77.69052601430394!3d12.92759441934141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13dc0d341da3%3A0xabe96f9f87f54725!2sWeWork%20Embassy%20TechVillage!5e0!3m2!1sid!2sid!4v1643892986623!5m2!1sid!2sid"
          loading="lazy"
          height="317"
          className="location"
        ></iframe>
      </section>

      <footer>
        <div className="container-xxl container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12 py-40 d-flex justify-content-between">
              <div className="left d-flex justify-content-start">
                <span>
                  Copyright © 2022 NeonByte PVT. LTD. All Right Reserved.
                </span>
                <div className="dot"></div>
                <a href="#term" className="term">
                  Term of use
                </a>
                <a href="#policy" className="policy">
                  Privacy policy
                </a>
              </div>
              <div className="right d-flex justify-content-end">
                <img
                  src="/icon/facebook.png"
                  width={24}
                  height={24}
                  className="me-16"
                />
                <img
                  src="/icon/twitter.png"
                  width={24}
                  height={24}
                  className="me-16"
                />
                <img
                  src="/icon/instagram.png"
                  width={24}
                  height={24}
                  className="me-16"
                />
                <img src="/icon/linkedin.png" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
