//Components
import Header from '../components/Header'
import Services from '../components/Services'
import AboutSection from '../components/AboutSection';
import Gallery from '../components/Gallery';
import { pageAnimation } from '../animations';
import { motion } from 'framer-motion';
import ScrollTop from '../ScrollTop';

const Home=()=> {
  return (
    <motion.div variants={pageAnimation}
     exit='exit'
     initial='hidden'
     animate='show'>
      <Header/>
      <AboutSection/>
      <Services/>
      <Gallery/>
      <ScrollTop/>
    </motion.div>
  )
};
export default Home;
