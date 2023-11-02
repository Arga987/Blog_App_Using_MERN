
import {format} from "date-fns"

export default function Post({title,summary,cover,content,createdAt}) {
    return(
        <div className="post">
        <div className="image">
          <img src="https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697932800&semt=ais" alt="Image for test"></img>
        </div>
        <div className="texts">
          <h2>{title}</h2>
          <p className="info">
            <a className="author">Arun S Adiga</a>
            <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    );
}