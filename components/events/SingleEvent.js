import Image from "next/image";

export default function SingleEvent(props) {
    const {id, title, description, image} = props.singleEvent;
    // const eventImage = image;
  return (
    <div>
      <div>
      <Image src={image} alt="event" height={366} width={500}/>
      </div>
      <div>
        <h5>Title</h5>
        <p>Date</p>
        <p>Address</p>
      </div>
    </div>
  );
}
