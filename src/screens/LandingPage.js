import React from 'react';
import {Link} from 'react-router-dom';
import './css/dist/block-library/style.min_prettify.css';
import './css/styles/style_prettify.css';
import './css/integrity-light_prettify.css';
import Logo from './images/logo.svg';
import AppleAppStoreLogo from './images/appstore.svg';
import GooglePlayStoreLogo from './images/playstore.svg';
import IPhoneView1 from './images/img-1-en.jpg';
import IPhoneView2 from './images/img-2-en.jpg';
import IPhoneView3 from './images/img-3-en.jpg';
import IPhoneView4 from './images/img-4-en.jpg';
import FooterImage from './images/footerImage.png';

function LandingPage() {
    return (
        <div className="page-template page-template-template-land page-template-template-land-php page page-id-19778 ios wpb-js-composer js-comp-ver-4.1.3 vc_responsive x-shortcodes-v2_3_3">
        <div className="c-wrap">
        
        <header className="c-head  u-sticky@m" role="banner">

            <div className="o-grid  u-alignCenter">

                <div className="o-grid__item  u-size-5">

                    <nav className="u-hide@xs-only  u-hide@s-only">
                        <a className="c-head__link" href="#features">Features</a>
                        <Link to="/pricing" className="c-head__link">Pricing</Link>
                        <Link to="/login" className="c-head__link">Login</Link>
                    </nav>

                </div>

                <div className="o-grid__item  u-size-2  u-flex  u-alignCenter">
                    <a href="/">
                        <img className="c-head__img" src={Logo}/>
                    </a>
                </div>

                <div className="o-grid__item  u-size-5  u-flex  u-justifyEnd  u-row">

                   <a className="c-button  js-download  u-hide@m" href="#" data-os-ios="https://itunes.apple.com/app/pregnancy/id505864483" data-os-droid="https://play.google.com/store/apps/details?id=com.hp.pregnancy.lite" target="_blank">Download</a> 

                    
                    <a className="c-head__svg  u-mR-2  u-hide@xs-only  u-hide@s-only" href="" target="_blank">

                        <img src={AppleAppStoreLogo} width="104" target="_blank"/>

                    </a>

                    <a className="c-head__svg  u-hide@xs-only  u-hide@s-only" href="" target="_blank">

                        <img src={GooglePlayStoreLogo} width="115" target="_blank"/>

                    </a>

                </div>

            </div>

        </header>

        

        <main className="c-main" role="main"/>

<section className="o-section  u-textCenter  u-flex  u-alignCenter  u-justifyCenter  u-column  js-reveal">

    <div className="o-grid  o-grid--item  u-size-10  u-size-12@m">

        <div className="u-h2  u-mB-2  u-mB-4@m">The #1  Pregnancy App For Fathers</div>

        <svg className="c-stars  u-mB-2  u-mB-4@m  u-m-a  u-size-10" height="32" viewBox="0 0 268 33" width="268" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="evenodd" transform="translate(0 .027178)">
                <path d="m134 27.4081564-10.580135 5.5623059 2.020626-11.7811529-8.559508-8.3434589 11.82895-1.718847 5.290067-10.7188471 5.290067 10.7188471 11.82895 1.718847-8.559508 8.3434589 2.020626 11.7811529z"></path>
                <path d="m192 27.4081564-10.580135 5.5623059 2.020626-11.7811529-8.559508-8.3434589 11.82895-1.718847 5.290067-10.7188471 5.290067 10.7188471 11.82895 1.718847-8.559508 8.3434589 2.020626 11.7811529z"></path>
                <path d="m250 27.4081564-10.580135 5.5623059 2.020626-11.7811529-8.559508-8.3434589 11.82895-1.718847 5.290067-10.7188471 5.290067 10.7188471 11.82895 1.718847-8.559508 8.3434589 2.020626 11.7811529z"></path>
                <path d="m76 27.4081564-10.5801345 5.5623059 2.0206259-11.7811529-8.5595087-8.3434589 11.82895-1.718847 5.2900673-10.7188471 5.2900673 10.7188471 11.82895 1.718847-8.5595087 8.3434589 2.0206259 11.7811529z"></path>
                <path d="m18 27.4081564-10.58013454 5.5623059 2.02062589-11.7811529-8.55950864-8.3434589 11.82894999-1.718847 5.2900673-10.7188471 5.2900673 10.7188471 11.82895 1.718847-8.5595087 8.3434589 2.0206259 11.7811529z"></path>
            </g>
        </svg>

        <div className="u-s5  u-mB-4">Daily coaching for expectant fathers all the way to birth</div>

        <Link to="/pricing"  className="c-button  c-button--alt  c-button--xlarge  u-size-12@xs-only  u-size-8@s-only  u-size-3@m  pink" >Try it free for 14 days</Link>
        

    </div>

</section>


<section className="o-section  u-pT-0  u-pB-0  js-reveal" id="features">

    <div className="o-grid  u-alignCenter">

        <div className="o-grid__item u-size-2@m"></div>

        <div className="o-grid__item  u-textCenter  u-textStart@m  u-justifyCenter  u-justifyStart@m  u-size-10  u-size-5@m  u-size-4@l  u-mB-4">

            <div className="u-h3  u-mB-2">Daily Summaries</div>

            <p>40 weeks leading up to birth.</p>
<p>Receive daily summaries of what you need to be aware of at that particular day in the pregnancy process. Always be informed on the key things: Your Baby's Development, Mother's Common Symptoms, Advice For Partners, Upcoming Doctors Appointments, Daily Tipps  </p>

        </div>

        <div className="o-grid__item  u-size-10@s  u-size-5@m  u-alignCenter  u-alignStart@m  u-justifyCenter  u-flex">

            <div className="iphone">

                <div className="iphone__screen">

                    <div className="iphone__view  active">
                        <img src={IPhoneView1} width="274"/>
                    </div>

                </div>

            </div>

        </div>

    </div>

</section>


<section className="u-locked@xs-only  u-locked@s-only">

    <div className="o-grid">

        <div className="o-grid__item  u-textCenter  u-textStart@m  u-justifyCenter  u-flex  u-size-10  u-size-4@m  u-mB-10@xs-only">

            <div className="u-h3  u-mB-2">Step by Step</div>

            <p>For each of the 280 days of the pregnancy receive advice.</p>
<p>We have compiled the advice from all major sources into one-source-of-truth and timed across the 280 day timeline to provide you with best-practice tipps exactly when you need it in the overall process.</p>

        </div>

        <div className="o-grid__item  u-size-6@m  u-first@m">

            <div className="c-demo  c-demo--spread">

                <div className="c-demo__img  c-demo__img--un">

                    <div className="iphone">

                        <div className="iphone__screen">

                            <div className="iphone__view  active">

                                <img src={IPhoneView2} data-os-src="https://philips-digital.com/wp-content/uploads/2018/08/droid-img-1-en.png"/>

                                <div className="iphone__status  iphone__status--alt">

                                    <span className="iphone__clock  js-clock"></span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="c-demo__img  c-demo__img--deux">

                    <div className="iphone">

                        <div className="iphone__screen">

                            <div className="iphone__view  active">

                                <img src={IPhoneView3} data-os-src="https://philips-digital.com/wp-content/uploads/2018/08/droid-img-2-en.png"/>

                                <div className="iphone__status  iphone__status--alt">

                                    <span className="iphone__clock  js-clock"></span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="c-demo__img  c-demo__img--trois">

                    <div className="iphone">

                        <div className="iphone__screen">

                            <div className="iphone__view  active">

                                <img src={IPhoneView1} data-os-src="https://philips-digital.com/wp-content/uploads/2018/08/droid-img-3-en.png"/>

                                <div className="iphone__status  iphone__status--alt">

                                    <span className="iphone__clock  js-clock"></span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>

    </div>

</section>




<section className="o-section  u-locked">

    <div className="o-grid  u-alignCenter">

        <div className="o-grid__item  u-size-1@m"></div>

        <div className="o-grid__item  u-size-10  u-size-4@m  u-textCenter  u-textStart@m  u-justifyCenter">

            <div className="u-h3  u-mB-2">Best Practice Tipps</div>

            <p>For each week in the journey we cover all the essentials you need to know across the 5 major categories: Your Baby's Development, Mother's Common Symptoms, Advice For Partners, Upcoming Doctors Appointments, Daily Tipps</p>

        </div>

        <div className="o-grid__item u-size-1@m"></div>

        <div className="o-grid__item  u-size-6@m">

            <div className="c-demo  c-demo--cards  u-mT-2">

                <div className="c-demo__img  c-demo__img--un">

                    <div className="card">

                        <div className="card__hero" style={{backgroundImage: 'url("https://philips-digital.com/wp-content/uploads/2018/07/lass.jpg")'}}></div>

                        <div className="card__content">

                            <div className="card__bump">

                                <div className="card__icon  bleen"></div>

                            </div>

                            <div className="card__title">The importance of vitamin D</div>

                            <div className="card__subtitle">Daily Summary</div>

                            <div className="card__excerpt">When you were little your mum may have told you to drink your milk. That's because milk is often fortified with vitamin D</div>

                            <div className="card__meta">Day 60</div>

                        </div>

                    </div>

                </div>

                <div className="c-demo__img  c-demo__img--deux">

                    <div className="card">

                        <div className="card__hero" style={{backgroundImage: 'url("https://philips-digital.com/wp-content/uploads/2018/07/food-1024x683.jpg")'}}></div>

                        <div className="card__content">

                            <div className="card__bump">

                                <div className="card__icon  card__icon--article  is-pink"></div>

                            </div>

                            <div className="card__title">Nutrients for pregnant women</div>

                            <div className="card__subtitle">Daily Blog</div>

                            <div className="card__excerpt">For most women, theres nothing more joyous than carrying a baby inside the womb. Women experience many changes in their body during pregnancy.</div>

                            <div className="card__meta">Day 62</div>

                        </div>

                    </div>

                </div>

                <div className="c-demo__img  c-demo__img--trois">

                    <div className="card  card--alt">

                        <div className="card__hero" style={{backgroundImage: 'url("https://philips-digital.com/wp-content/uploads/2018/07/annie-spratt-129941-unsplash-1024x682.jpg")'}}></div>

                        <div className="card__content">

                            <div className="card__bump">

                                <div className="card__icon  card__icon--size  is-bleen"></div>

                            </div>

                            <div className="card__title">Your baby is the size of a raspberry!</div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>




<section className="c-box  js-reveal">

    <div className="o-grid  u-alignCenter">

        <div className="o-grid__item u-size-1@m"></div>

        <div className="o-grid__item  u-justifyCenter  u-justifyStart@m  u-size-10  u-size-5@m  u-size-4@l">

            <div className="u-h3  u-mB-2">To-Do List</div>

            <p>For each week leading up to pregnancy we have compiled a list of recommended To-Do's.</p>
<p>Stay informed by simply following the list of recommended items for each week and easily remain on-track by checking things off from the list.</p>

        </div>

        <div className="o-grid__item  u-size-6@m">

            <div className="c-demo  c-demo--lean  u-mT-1@m  js-reveal">

                <img className="c-demo__img  c-demo__img--over" src="https://philips-digital.com/wp-content/uploads/2018/08/weight-1-en.png" data-os-src="https://philips-digital.com/wp-content/uploads/2018/08/droid-weight-1-en.png"/>

                <img className="c-demo__img" src="https://philips-digital.com/wp-content/uploads/2018/08/weight-2-en.png" data-os-src="https://philips-digital.com/wp-content/uploads/2018/08/droid-weight-2-en.png"/>

            </div>

        </div>

    </div>

</section>




<section className="o-section  u-pB-1  u-locked">

    <img className="splodge1  u-hide  u-block@l" src="https://philips-digital.com/wp-content/themes/hp-site/images/mini-splodge.svg"/>

    <div className="o-grid">

        <div className="o-grid__item  u-size-10  u-size-12@m  u-justifyCenter">

            <div className="u-h3  u-mB-4  u-textCenter">'Cooler Talk' Providing A Forum For All Things Fatherhood</div>

            <div className="mask">

                <img className="mask__under" src="https://philips-digital.com/wp-content/themes/hp-site/images/splodge.svg"/>

                <figure className="mask__fig  js-reveal--deux">

                    <div className="iphone  js-counters">

                        <div className="iphone__screen">
                            <img src={IPhoneView4}/>
                        </div>

                    </div>

                </figure>

                <img className="mask__over" src="https://philips-digital.com/wp-content/themes/hp-site/images/mask.svg"/>

            </div>
        </div>

    </div>

    <img className="splodge2  u-hide  u-block@l" src="https://philips-digital.com/wp-content/themes/hp-site/images/mini-splodge2.svg"/>

</section>




<section className="o-section  u-textCenter  u-flex  u-alignCenter  u-justifyCenter  u-column  u-p-0@m" id="download">

    <div className="o-grid  o-grid--item  u-size-10  u-size-12@m">

        <div className="u-h3  u-mB-2  u-textCenter">Loved by Expectant Dads all around the world</div>

        <div className="u-textCenter"><p>Download Dhiti today to get coached through your pregancy.</p>
</div>

        <a className="c-button  c-button--alt  c-button--xlarge  js-download  u-size-12@xs-only  u-size-8@s-only  u-hide@m" href="" data-os-ios="" data-os-droid="" target="_blank">Download Dhiti</a>

        <div className="u-flex  u-hide@xs-only  u-hide@s-only  u-justifyCenter">

            <a className="u-mR-2" href="" target="_blank">

                <img src={AppleAppStoreLogo} width="120"/>

            </a>

            <a className="" href="" target="_blank">

                <img src={GooglePlayStoreLogo} width="135"/>

            </a>

        </div>

    </div>

</section>




<section className="c-box  c-box--bleen  js-reveal" id="contact">

    <div className="o-grid  u-alignCenter">

        <div className="o-grid__item u-size-1@m"></div>

        <div className="o-grid__item  u-justifyCenter  u-justifyStart@m  u-size-10  u-size-5@m  u-size-5@l">

            <div className="u-h3  u-mB-2">Supporting expectant dads through pregnancy.</div>

            <p>For App support please contact our support. For Business & Advertising queries please contact marketing.</p>

            <a className="c-button  c-button--shadow  c-button--round  c-button--xlarge  u-mB-1  u-mB-0@s" href="/cdn-cgi/l/email-protection#0a797f7a7a65787e4a626f6b667e62276b646e277a6b786f647e63646d24696567" title="mailto:support@health-and-parenting.com">Support</a>

            <a className="c-button  c-button--shadow  c-button--secondary  c-button--round  c-button--xlarge  u-mL-2@s" href="/cdn-cgi/l/email-protection#8ae7ebf8e1effee3e4edcae2efebe6fee2a7ebe4eea7faebf8efe4fee3e4eda4e9e5e7" title="mailto:marketing@health-and-parenting.com">Marketing</a>

        </div>

        <div className="o-grid__item  u-size-6@m">

            <div className="c-demo">

                <img className="c-demo__img" src={FooterImage}/>

            </div>

        </div>

    </div>

</section>
        
            <footer className="c-foot" role="contentinfo">

                <div className="o-grid  u-alignCenter">

                    <div className="o-grid__item  u-size-4@s">

                        <a className="u-block  u-pV-2" href="/">

                            <img className="c-foot__img" src={Logo}/>

                        </a>

                    </div>

                    <div className="o-grid__item  u-size-4@s  u-textCenter  u-textStart@s  u-first@s">

                        <div className="u-flex  u-justifyCenter  u-justifyStart@s">

                            
                                <a className="c-socialIcon  c-socialIcon--footer" href="https://www.facebook.com/" target="_blank" rel="nofollow">

                                    <svg className="c-socialIcon__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">

                                        <path d="M52.75 94H11.5A5.506 5.506 0 0 1 6 88.5v-77A5.506 5.506 0 0 1 11.5 6h77a5.506 5.506 0 0 1 5.5 5.5v77a5.506 5.506 0 0 1-5.5 5.5h-22V61h11l2.75-13.75H66.5v-5.5c0-2.737.695-4.819 2.064-6.188S72.015 33.5 74.75 33.5h5.5V19.75h-11a15.211 15.211 0 0 0-12.04 5.377 17.973 17.973 0 0 0-3.3 6.086A25.239 25.239 0 0 0 52.75 39v8.25h-11V61h11v33z"/>

                                    </svg>

                                </a>

                            
                            
                                <a className="c-socialIcon  c-socialIcon--footer" href="https://www.instagram.com/" target="_blank" rel="nofollow">

                                    <svg className="c-socialIcon__svg"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">

                                        <g transform="translate(2.6 1.2)">
                                          <path d="M47.226 25.83a22.62 22.62 0 1 0 22.62 22.62 22.664 22.664 0 0 0-22.62-22.62zm0 37.111A14.491 14.491 0 1 1 61.717 48.45a14.557 14.557 0 0 1-14.491 14.491z"/>
                                          <circle cx="5.125" cy="5.125" r="5.125" transform="translate(65.606 20.175)"/>
                                          <path d="M83.985 12.046C79.39 7.274 72.851 4.8 65.429 4.8h-36.4C13.65 4.8 3.4 15.05 3.4 30.424v36.228c0 7.6 2.474 14.138 7.422 18.909 4.771 4.595 11.133 6.892 18.379 6.892h36.051c7.6 0 13.961-2.474 18.556-6.892 4.771-4.595 7.246-11.133 7.246-18.732v-36.4C91.053 23 88.579 16.64 83.985 12.046zm-.707 54.783a17.268 17.268 0 0 1-5.125 12.9c-3.181 3-7.6 4.595-12.9 4.595H29.2c-5.3 0-9.72-1.59-12.9-4.595-3.181-3.181-4.771-7.6-4.771-13.077V30.424c0-5.3 1.59-9.72 4.771-12.9 3-3 7.6-4.595 12.9-4.595h36.4c5.3 0 9.72 1.59 12.9 4.771a18.236 18.236 0 0 1 4.771 12.724v36.4z"/>
                                        </g>

                                    </svg>

                                </a>

                            
                            
                                <a className="c-socialIcon  c-socialIcon--footer" href="https://www.pinterest.co.uk/" target="_blank" rel="nofollow">

                                    <svg className="c-socialIcon__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                        <path d="M49.854 5a44.839 44.839 0 0 0-17.993 85.916 40.507 40.507 0 0 1 .771-10.282c.835-3.663 5.783-24.419 5.783-24.419A17.527 17.527 0 0 1 37 49.147c0-6.619 3.856-11.631 8.675-11.631 4.048 0 6.04 3.085 6.04 6.747 0 4.113-2.635 10.217-3.984 15.937-1.092 4.755 2.378 8.611 7.069 8.611 8.482 0 14.2-10.924 14.2-23.841 0-9.832-6.619-17.158-18.636-17.158-13.623 0-22.041 10.153-22.041 21.463a12.946 12.946 0 0 0 2.956 8.8 2.128 2.128 0 0 1 .643 2.506c-.193.835-.707 2.827-.9 3.6a1.517 1.517 0 0 1-2.249 1.092c-6.233-2.57-9.189-9.446-9.189-17.158C19.587 35.4 30.319 20.1 51.653 20.1c17.093 0 28.4 12.4 28.4 25.7 0 17.607-9.768 30.717-24.162 30.717-4.82 0-9.382-2.635-10.924-5.591 0 0-2.635 10.346-3.149 12.338a37.639 37.639 0 0 1-4.5 9.575 43.841 43.841 0 0 0 12.724 1.864A44.854 44.854 0 1 0 49.854 5z"/>
                                    </svg>

                                </a>

                            
                            
                                <a className="c-socialIcon  c-socialIcon--footer" href="https://twitter.com" target="_blank" rel="nofollow">

                                    <svg className="c-socialIcon__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">

                                        <path d="M97.659 21.848a38.4 38.4 0 0 1-11.083 3.038 19.331 19.331 0 0 0 8.484-10.677 38.627 38.627 0 0 1-12.253 4.685 19.312 19.312 0 0 0-32.877 17.6 54.789 54.789 0 0 1-39.777-20.162 19.32 19.32 0 0 0 5.972 25.763 19.241 19.241 0 0 1-8.74-2.415v.244a19.311 19.311 0 0 0 15.48 18.921 19.4 19.4 0 0 1-5.084.676 19.119 19.119 0 0 1-3.631-.347 19.317 19.317 0 0 0 18.022 13.4 38.937 38.937 0 0 1-28.568 7.99 54.605 54.605 0 0 0 29.58 8.67c35.495 0 54.9-29.4 54.9-54.9q0-1.254-.053-2.5a39.082 39.082 0 0 0 9.628-9.986z"/>

                                    </svg>

                                </a>

                            
                        </div>

                    </div>

                    <div className="o-grid__item  u-size-4@s">

                        <div className="u-textCenter  u-textEnd@s  u-pV-2">

                            <a className="u-block" href="/privacy">Privacy & Terms</a>

                            <div>All contents copyright © Dhiti LLC 2022. All rights reserved.</div>

                        </div>

                    </div>

                </div>

            </footer>

    </div>

    <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script type='text/javascript' src='https://philips-digital.com/wp-content/themes/hp-site/scripts/polyfills/polyfills.min.js?ver=5.8.3' id='polyfills-js'></script>
    <script type='text/javascript' src='https://philips-digital.com/wp-content/themes/hp-site/scripts/springboard/springboard.min.js?ver=5.8.3' id='springboard-js'></script>
    <script type='text/javascript' src='https://philips-digital.com/wp-content/themes/hp-site/scripts/parties/scrollreveal.min.js?ver=5.8.3' id='scrollreveal-js'></script>
    <script type='text/javascript' src='https://philips-digital.com/wp-content/themes/hp-site/scripts/parties/easytimer.min.js?ver=5.8.3' id='easytimer-js'></script>
    <script type='text/javascript' src='https://philips-digital.com/wp-content/themes/hp-site/scripts/application/application.min.js?ver=1.3.2' id='application-js'></script>
    <script type='text/javascript' src='https://philips-digital.com/wp-content/plugins/x-shortcodes/js/dist/site/x-shortcodes-body.min.js' id='x-shortcodes-site-body-js'></script>
    <script type='text/javascript' src='https://philips-digital.com/wp-includes/js/wp-embed.min.js?ver=5.8.3' id='wp-embed-js'></script>

        </div>
    )
}

export default LandingPage