
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";




const Project = () => {
  const [] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });


  Modal.setAppElement("#root");


  return (
    <div></div>
    
  );
};

export default Project;
