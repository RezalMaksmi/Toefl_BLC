import React from "react";

import DashboardAdmin from "./DashboardAdmin";
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/swiper.min.css';
// import 'swiper/css';

const Home = () => {
  // const {id} = useParams();
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { loading, products,users } = useSelector((state) => state.getAPI);
  // const [progress, setProgress] = useState(0);
  const getUserDataFromLocalStorage = () => {
    const getUser = localStorage.getItem("userData");
    return getUser ? JSON.parse(getUser) : {};
  };
  const { token, role } = getUserDataFromLocalStorage();

  // console.log(products)

  // fetch api

  // const featchDataCuy = async () => {
  //   try {
  //     const productResponse = await axios.get("http://localhost:2000/products")

  //     console.log("respon"+productResponse)

  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // useEffect(()  =>{
  //   featchDataCuy()
  // }, [])

  // console.log(role)

  return (
    <div className="w-full">
      {role === "admin" && token ? (
        <DashboardAdmin />
      ) : (
        <div className="flex flex-row flex-wrap gap-4 justify-center items-center h-screen py-8 w-full">
          {/* <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
          </Swiper> */}
        </div>
      )}
    </div>
  );
};

export default Home;
