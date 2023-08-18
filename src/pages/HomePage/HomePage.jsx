import React, { useEffect, useState } from 'react';
import aboutImg from '../../images/about.jpg';
import s from './homePage.module.css';
import { FaPhoneVolume } from 'react-icons/fa';
import Button from '../../shared/Button';
import Modal from 'components/Modal/Modal';
import Carousel from '../../components/Carousel/Carousel';
import ModalCard from 'components/Card/ModalCard/ModalCard';
import { getAdverts } from 'shared/api';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
const HomePage = () => {
  const [modal, setModal] = useState(false);

  const [contents, setContent] = useState({
    items: [],
    loading: false,
    error: null,
  });
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      setContent(prevContent => ({
        ...prevContent,
        loading: true,
        error: null,
      }));
      const data = await getAdverts();

      if (!data) {
        setContent(prevContent => ({
          ...prevContent,
          loading: false,
          error: null,
        }));
        return;
      }
      setContent(prevContent => ({
        ...prevContent,
        items: [...prevContent.items, ...data],
        loading: false,
      }));
    };

    fetchPosts();
  }, []);

  const onCardClick = content => {
    setModal({
      isOpen: true,
      content,
    });
  };

  const closeModal = () => {
    setModal({
      content: {},
      isOpen: false,
    });
  };
  const { isOpen, content } = modal;
  const phoneClick = () => {
    const phoneNumber = '380730000000';
    window.location.href = `tel:${phoneNumber}`;
  };
  const mailToClick = () => {
    const phoneNumber = 'mail@mail.gmail.com';
    window.location.href = `mailto:${phoneNumber}`;
  };
  const { loading, items } = contents;

  return (
    <>
      <div className={s.sectionHr}>
        <div className={s.colHr}>
          <div className={s.textBox}>
            <h1 data-aos="fade-down" className={s.sliderText}>
              Fast & Easy Way To Rent A Car
            </h1>
            <p data-aos="fade-left" className={s.textP}>
              With CarBook your driving adventures start here. No matter where
              you are going, we guarantee comfort, reliability and enjoyment of
              the trip!
            </p>
            <div data-aos="fade-down" className={s.wrapIcon}>
              <div className={s.icon}>
                <FaPhoneVolume onClick={phoneClick} />
              </div>
              <div className={s.text}>
                <span>Easy steps for renting a car</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className={s.sectionFt}>
        <div className={s.servicesWrap}>
          <h3 data-aos="fade-down" className={s.headSection}>
            Better Way to Rent Your Perfect Cars
          </h3>
          <div data-aos="fade-down" className={s.rowFt}>
            <div className={s.servicesFt}>
              <div className={s.iconFt}>
                <img
                  alt="iconPicture"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFS0lEQVR4nOVbW2gcVRg+qaW1Xh6koJYqIlaFYIvN+SeJVQnoi1ItohRBGpGKrU268/+TGMVIXX0QLw+2IpTGG9TLg2ix4pMWUbHgBfrgDaq2fSjehSgKXqr1k7NJzL/rJjszO2dnsvngQGB355//O//9nBjjCX1lnNgV4hpiiBVExFhnN+Ek0/YoY4ENsZUE4yRAzfrJRhg2Bh2mPYEOEjxVR/HqxXihLUmwjCGtqBUctIwdljFGgkNVnzGGTDuhcwCnEONnpfz2vjIWTn2+ooTFVvB0lTu0U0ywjOuU8l9o5atIYBye+p4LkqZdYBl3qd19fJbvjbWlGxBjRCk2NtP3rOAJZSmRaRcQY52ygEPO3OvVBlZwRBGw1rRVEJTp3O8CniahojzjGUXSeG+EJb7eJxjCBc4qnWvWWyTodzVLpkJd1VeT6g47d3Bmr3d+shYQ4xE62M6y+jMVSoJyDKHOOp7zXQjFIiDEhswEkuBaYhxXAo7VETo+sfP+q8CeEOdbwTYSPFR3OeXLGbnApL9NF0GMt9eM4FRiXE0CdtHe5XyfPp9r8LOMT5XyR1cN43QzP4AOK9ijlP+dQgS+pdIQzibGjVZw50xRvtHKJAuQYLQmsm80HlFxq4lus158SbP6U79Mxb+rg95O4xHBIJYS40BGijeXBWwJ51UNPBj7O8tYlLnWWibj+Rpre50YD88Y5RuttFlg1TBOJsbH6mW+toJlxiOs4FKvBUx8oMMyXlS78GfAuMR4BjH2Kpl7TV6wjM01pe5m3zKJcaGONZbRY/JAb4QlxPhR7cSTrZBLgl2qhH6nFTIbt7uMb1wsMJ7hCirL+K0QEyTLuEeZ/66WyBTcr3b/YObtaxIQ415FwGOmFS4n+OE/AkLcavKEjXCT2o1PfO+GFdyuXa7ehKmlCAaxVPujO/3xerrE+FwRcLcpAojxoK4BXIHie8ROgl9XbsFppghYUcJiYnygcvK3vRGWZy2HBO8qd9tuigQrWObKX2UJB7IcdLh2WhH81+phnGOKhi7B5boldRPgxA8pY4Gr6f/XpzP2q+ceSdvve58HUISBqgYlwkCS31vGzZm2tq2eBzjUHHYec5ZhYsIJz52AsMmpcCUoCt5XJvtddwlnxXaBEBtS9/PNrqymwr0RlrtsoAcVZr7BhrjMCv5WluClPig0SLBbEfCImW+g6qD2Sto02HBFGO7einNN0UCCTSoOvOQ1DTK+NEUDMd5ULrCt0fct475mUpgpEmx163rcnRUmImCi+ouTvopHAJWwxnWGSadFmgD3dyxZRSMguANnWsZX6sU+ijsrnPMEdJaxSDcu7qTInRjF/X1SAtxMQMn6w+QNEuys8vsIVyX5fQ0B+xp0bqPEeE8F2Q+bTatNdYPE2FgTlUeTPqOpLBDihozSan9y5UMElXsA07uxJ82Vl1QEuGDLGMmsuwwTdoOTBxVHlfKfuTP7pMonTYOW8YBlbJl1OpS0u0zaDfaVsZAEbym//aW7hM40yqfNArnCMnYo8/mHGNc3+by5Q0DAuFj7ThYvPKcIsBFWTh1RW8FrWUxSSDCoCHjWFB1BiCvd4NPd+c3ieVbQpesId3vU1wS4ZXeFk8IKXm6mI8xg9Zs84f5lJlcSwhnqgK4QNmDc4m6BtoIIYjwaqybQvUf8FjpZHUCqvU114uMxI3jPHD0hzqhpb3eb+ULA+vU4gQRvKBP7PvYhRzsQQGrk5Gb8XYIrTIuQoDXe54UACnFRpbzN6UZGms4wWwKGsHqKACt4tdX/19uSVrYRrGBtwLgtl8tIvlvZWfAvyfZfbC95NhQAAAAASUVORK5CYII="
                />
              </div>
              <div>
                <p>Choose Your Pickup Location</p>
              </div>
            </div>
            <div className={s.servicesFt}>
              <div className={s.iconFt}>
                <img
                  alt="iconPicture"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE4UlEQVR4nO2bS4hcRRSGa1QUfEWT+AIRF4IxmtecupM2RnThRhB0MwslCAYZTSZ9z7kdZTbiuFAyKi4EBREfwbcbcefC3UxEEPJwopkEdCE66vjEJ6OQ+aV6zp3p7vQ8vLfu7eokPxTM3J45VefrU6eqTlcbU4BsDZusYMwy/rEC5GrOBmM0Ymw03aANjItI8FNux09sP9AQVpjQZQUDOuCxLQ/jgrz2+qq40DL2qc0BE7pI8I4bLAke9GaTsaNuk/G2CV1WMFkfbA1rfNncxLhO88G3JmRRDWv0nfrOGPQUAdYyrjWhihgPFBWq6dQKOg9YwVu+538qZ1Mj4E0TojZWcYllTBWw/LXuC6ZcXyYkVRKstIzxwp2fhzDu+jShyDL2augfXr8blxbVj7Pt+tC+XjWhyAp+qQ8qxlVF9+X60ET7swlFVkMz/Z0EHzWE7FhWuwvZae2v47ItA6ofhObn62gOu23tBA+gaIUHgPGj5oCtRffVK7g5XQ5NKCLG06UtgfNtxISiW4ZxFgmeKnEf8KTr04Qme2IyzDVXfdsr7ygcY+vcXBVMhmKvcFnBSJtw3ROKvcK1dhhn66AntY24Z6HYO63T6pBsjG2W8TEx/s6w7P1LgqPEeIQGcK7pJvX340x3bPW4/u8v8rjt33nGGzrwP61gMEslZ/1unGcZtxPjyzJqDj6dfy11nhi3eiq5zVadGBMkuMKcKs53DYT+hrAnxu9FnA5bymKHc1ehqLnq4qUt5LwbLAleJMY3VjCdNbs3QsjZxkxZzvcmqCz4qTFj//9NkFqJ3pvWI7M2k/eEtZywV+d/07/5MBJYqmF1b4w7rOALhTBeZr3fEwD0kOB1tfHHUs67T3UcsMbXndNz4VwiBC8ArGAwj/Nt53RJELwAoDSBxtiW1fkFEtunboqY4COAZ4uhm2Nclsf5JgiMzzRXHCoSgq8I+EQHe3f6LGLcmMX5siH4iYAEO/X/p63gJRK8rD9ncj6Vi6hGCNEgVmWxU/wqMIwziPG8Fcw0rK0z7llW55sgCD6vQxAc9A3B2z7AqS/BBsuQeotxg8lw4mt3p6hICF4B5JXuJWYoxq5FITAO+IIQFgDGvTqNlgXBx+WIoAA4keB+yziuOSQ2i58Cc0+HjgGgIaywAm5X1dELkQtGQvQQLreCI+kBat0OXNx1AOz80nnEOdQpCB0DUEmw0q3tPiFkuZPc0RxANaz2AoExoTYeDxLANVWcQ4xXLGN7ERBIcJNGwUSQADYzrl4ss+eF4Iqiuip8nxuAzV8KO9SuSqvfH5jxBkGQzF7ERg8xnsg7btN0EysvBFfkzAuBMbEEBGgZbbaUlqcx9hmPmf1A4RBi7Go6eDGmGo/iHVWlLAiC6hyEKraYkFQpAEJrtalug7FH8867JjRVPENwhZHWbbM7ciugcROiokGs8gFh7pJUCwSb4D59/oEJVZEPCM0XML8ixpDeR/yrbjfBPSZkRcuDkH624EBw02uM9/W1X1uWMPe3z5puULQMCGmxQx17gQR3EuM5fTbdV8WVxLjLbXyI8Rgl6DPdpGgJCA0AWtu0qxaZk0GRgyA4qMnrmHsX9Wuxj6b7eUqwzgqeIcZ7bq5HguvNyaSoIRJatqTHidFvTgWt3Ynz6++y4Ov6tTnGqBXc1qkB/QcXZPhIeS069gAAAABJRU5ErkJggg=="
                />
              </div>
              <div>
                <p>Select the Best Deal</p>
              </div>
            </div>
            <div className={s.servicesFt}>
              <div className={s.iconFt}>
                <img
                  alt="iconPicture"
                  src="data:image/png;base64,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"
                />
              </div>
              <div>
                <p>Reserve Your Rental Car</p>
              </div>
            </div>
          </div>

          <Button variant="primary" onClick={mailToClick}>
            Reserve Your Perfect Car
          </Button>
        </div>
      </div>
      <div data-aos="fade-down" className={s.sectionSl}>
        <div className={s.servicesWrapSl}>
          <span className={s.subheading}>What we offer</span>
          <h2 data-aos="fade-left" className={s.h2Sl}>
            Feeatured Vehicles
          </h2>
          <div>
            {!loading && <Carousel items={items} handleClick={onCardClick} />}
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className={s.sectionPi} name="aboutId">
        <div className={s.sectGreen}>
          <div className={s.sectPiText}>
            <img src={aboutImg} alt="about" width="450px" />
            <div className={s.about}>
              <span className={s.subheading}>About us</span>
              <h2 data-aos="fade-down">Welcome to CarBook</h2>

              <p className={s.sectH2}>
                Car rental company 'CarBook' is your reliable partner in the
                world of car adventures and freedom of movement. We provide a
                wide range of rental cars to suit every need and preference.
                <br />
                <span>Variety of Choices:</span> Whether you need an economy car
                for city commuting, a spacious SUV for family trips, or a luxury
                sedan for a special occasion, we have the car for you.
                <br />
                <span>Easy Booking Process:</span> Our user-friendly online
                interface makes it easy for you to select a vehicle, enter
                rental and pickup dates, and additional services you may wish
                for.
                <br />
                <span> Reliability and safety:</span> All our cars are regularly
                maintained and checked before each rental, so that you can feel
                confident on the road.
                <br />
                <span> Professional Service:</span> Our friendly team is always
                available to assist you with your car selection, provide
                information on local attractions and suggest the best routes.
                <br />
                <span> Flexible rental terms:</span> We understand that your
                plans may change, so we have flexible terms for cancellations
                and changes to your booking.
              </p>
              <p>
                <Link to="/catalog">
                  <Button variant="primary">Search Vehicle</Button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className={s.sectionSr} name="serviceId">
        <div className={s.servicesWrapSl}>
          <span data-aos="fade-down" className={s.subheading}>
            Services
          </span>
          <h2 data-aos="fade-down" className={s.h2Sl}>
            Our Latest Services
          </h2>
          <div className={s.rowFt}>
            <div className={s.servicesFt}>
              <div className={s.iconFt}>
                <img
                  alt="iconPicture"
                  src="data:image/png;base64,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"
                />
              </div>
              <div>
                <h3 className={s.heding}>Wedding Ceremony</h3>
                <p>
                  Diverse selection of vehicles.
                  <br />
                  Easy online booking.
                  <br />
                  Reliable and safe cars.
                  <br />
                  Professional service and flexible terms.
                </p>
              </div>
            </div>
            <div className={s.servicesFt}>
              <div className={s.iconFt}>
                <img
                  alt="iconPicture"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD1klEQVR4nO1Xz2sdVRQe4qIRLDXu4i9chFpqY0nOeWkIQqBWcdFCoQSp+AeYaueceVLc5VEIZKck4KKL7lrwR0DdKJbSdlFa/IFbFxKtv0CFpCaaIBrzlTu58zKv8+ZN3sydl0LfBwfem7lzzv3m3vt9czyviy66uGdAb2EP+zjBgjkSfMaCb0nxGyuWWPB/GIql8Jq5Z8YoZklw/KDg4Z2ev0c+niTBORb8zQrkCRL8R4r5ShV7d4ZEgEESLMYmdZUCvEk+XjCTGpxEX/xtD06iz4S5Z8aEYwXXWLFhCa0M+Xi280QE34QTUFyuKJ7Jm4cFT7Pgc5vrhtdJkI/n7Cr8Ol5Db9F84zX0suIPk3MkwEGvUyDBBUtk2llOxTthTsGc1wmYfU+CNaNEhwRPuTxzvHlWFgdOY5ervOkFFa9FZ6OE3F/aVXm5dN1nxddhMR+vuibCAU5ZIldK1/0oypDK0QCP2fwbQwEGOqP7imX2ccAVicFJ9IW7ZGt+0x3T/ZLjR6+GnsbiAcatIvziWvcdxm0SfMUCJcGCvXakoTAp3rOrcdZzBBa8bYvNusoZgQVT9sVfqF8cDfAIK/4JlaiKJzxHMOcj0v08qzz0Oh4lxSesWK2viuC7YcVh408291r9AfLxhh14yRWJOhnBF7bgyXafpU1JT24xwa0wt/2fPOQBXnFFIOZD123xP1nwezv9Byv+Cp+tYihUVMW83f4/JIhQFfvszfXRAA8WJWC2JinON2yH9uNfFnxIiu8TvYliedjH0QQRFsxEzQsrjhmtLvgttOTKh9iqqDkHhhQJ3h05jcfrLy0iMjGBB0jxs2t9d+pDgpup4yIipHjRsl4w2my/kW4XIlGCD4006T/GzmB3nQgLLlrWU0ULk+B91z5EUf+REab4mvlhNLni43mj0bEBq0bDjZZnFSzLh8j2Hynbd31rRWKn3ny3pDzwaWbBEn2Iov4j7hcWzYkIbtn/H1jNHo7kLrNYCT6U6D/Sz+RPDUSMNoef3W2uiGsfatF/NCVRCfBSwuKNRhuttpq9woqPSNHvtYBLH8rsPwQzXjOk7b1to4Ye81Zc+xC3kHbjfalE9p/CQ3l4mGV17UOc0X8Y70slUjgc+FAWWFFL9B+xmwlNzhNFfSh3/xEhU58z4MqHcvcfEVod1FCf2yFSwIfq81Er/9vpP+4+rM3I1PW5DSJ5fShrRSit/3AJFz7UQETRz4KPzbMt+4+yiZQNLptIXh9qB2Px/sM1HBpfW1EakaI+tJ2geP9RFpHtXt/pvKko6kOdzpuKoj7U6bxddHG/4g670S8EjlQaxwAAAABJRU5ErkJggg=="
                />
              </div>
              <div>
                <h3 className={s.heding}>City Transfer</h3>
                <p>
                  Diverse selection of vehicles.
                  <br />
                  Easy online booking.
                  <br />
                  Reliable and safe cars.
                  <br />
                  Professional service and flexible terms.
                </p>
              </div>
            </div>
            <div className={s.servicesFt}>
              <div className={s.iconFt}>
                <img
                  alt="iconPicture"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC80lEQVR4nO2XPWgUURDHnwqCiqKQSistJChRkpkNIZ1oIX4jpBArBSPB5Gb2xE4NgqWiAQlY2FgIihY2FiIqWomKlYVil6iIRUTwo5D85SW5eHcmt5vb280lOz94zX68N/N/8/Gec4ZhGIZhzAVW7GfFRz86Ctjn8gYJRlkBP0gx4vIGT+7+pACCUZc3SLF3WoAC9rg8wlMCuLzCKQvQOYA1FKKTi2h3eRMgUBwlwa/SGix4zYpdbj6hXqxkwXESvJw27N94xYre7jNY3ZDFBrGUBNer1yHFAwrRFsvWEMdYcClQcCJbqIhWElxlxdgMjlcaKPjuDe8ogFxisIQVl2cQ4Q8pbnSF2FD9R1DEZlJcKbeVBD9Z8MJ3rlgFmyOcrHfUKwMrBmeZ8wcrLm4XrCXBIVY8ZMV4hB23FpwAHlKEsznnIyJi7XEWPAsEJ7xYLi4cYXjS93PFOxDD2fJ0fEeKc5392FjXgpyBADyAbt/qomzZdhqrfJElweeajgu+kuBaR4gulxROWQASnC0z/kkQYrcvfBXfFNHKiiEWfKvh+G9S3GXBgS2DWJ7A5WwF6OnBMhLcrsrnNyQ4woLDpHhUo6j55899VLT1YZ1LA84gBfyO+d4eO68V71lwnhWbSv0+KGAnKS6Q4CkV0J/Q7eyLYFeIFd74Go6PkeDm5EmwMkUCxVYWfKr4togWlwSehzboz/1Tp8nyvL5HioNReT1xUFOMlP07tOAE8PidY8UdEpyca177VseKD1Od4ItLAhXRQiF2kKCPFcMseOzbS2xn/bf+H8Wwn2NirqRhGYP2U1hPirekuJ/KAtygnU4THzkNbYULTYBU4bwLUCK3jpcwAdQiAJYCajUAVgTVugCsDer/54C0LlNZXsxqEjXpfDtnAqhFAJouBVzEXPW8j/MulSLNJgAsAthSAFYD2IogrAtwwjazKNvgohCAMzp7mwDapBGQFSaANlkEcEb38LTXqbcmORNALQKQ6xQwDMNwOeMvbSyq+WwgbpkAAAAASUVORK5CYII="
                />
              </div>
              <div>
                <h3 className={s.heding}>Airport Transfer</h3>
                <p>
                  Diverse selection of vehicles.
                  <br />
                  Easy online booking.
                  <br />
                  Reliable and safe cars.
                  <br />
                  Professional service and flexible terms.
                </p>
              </div>
            </div>
            <div className={s.servicesFt}>
              <div className={s.iconFt}>
                <img
                  alt="iconPicture"
                  src="data:image/png;base64,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"
                />
              </div>
              <div>
                <h3 className={s.heding}>Whole City Tour</h3>
                <p>
                  Diverse selection of vehicles.
                  <br />
                  Easy online booking.
                  <br />
                  Reliable and safe cars.
                  <br />
                  Professional service and flexible terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section data-aos="fade-down" className={s.ftcSection}>
        <div className={s.overlayFu}></div>
        <div className={s.container}>
          <div className={s.rowFu}>
            <div className={s.colFu}>
              <h2 data-aos="fade-down" className={s.h2Fu}>
                Do You Want To Earn With Us? So Don't Be Late.
              </h2>
              <Button
                data-aos="fade-up"
                onClick={mailToClick}
                variant="primary"
              >
                Become A Driver
              </Button>
            </div>
          </div>
        </div>
      </section>
      {isOpen && (
        <Modal close={closeModal}>
          <ModalCard content={content} />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
