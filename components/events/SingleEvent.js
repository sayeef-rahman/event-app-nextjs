import Image from "next/image";
import classes from "./SingleEvent.module.css";

export default function SingleEvent(props) {
    const {id, title, description, image, date, location} = props.singleEvent;
    // const eventImage = image;
  return (
    <div className={classes.singleEventBody}>
      <div className={classes.singleEventImage}>
      <Image src={image} alt="event" height={366} width={500}/>
      </div>
      <div className={classes.singleEventInfo}>
        <h5>{title}</h5>
        <time>{date}</time>
        <p>{location}</p>
      </div>
    </div>
  );
}
