export default function Post() {
    return(
        <div className="post">
        <div className="image">
          <img src="https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697932800&semt=ais" alt="Image for test"></img>
        </div>
        <div className="texts">
          <h2>A gamer playing games and being lost in its world</h2>
          <p className="info">
            <a className="author">Arun S Adiga</a>
            <time>2023-10-22 18:10</time>
          </p>
          <p className="summary">A dog is a man's best friend</p>
        </div>
      </div>
    );
}