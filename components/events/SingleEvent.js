import Image from "next/image";
import Link from "next/link";
import classes from "./SingleEvent.module.css";

export default function SingleEvent(props) {
    const {id, title, description, image, date, location} = props.singleEvent;
  return (
    <div className={classes.singleEventBody}>
      <div className={classes.singleEventImage}>
      <Image src={image} alt="event" height={366} width={500}/>
      </div>
      <div className={classes.singleEventInfo}>
        <h3 className={classes.eventTitle}>{title}</h3>
        <time>{date}</time>
        <p className={classes.eventLocation}>{location}</p>
        <Link href={`/events/${id}`}><button className={classes.button}>Event Details</button></Link>
      </div>
    </div>
  );
}
