function Video({ id, title, rating, remove, like }) {
  return (
    <div>
      <div className="Video">
        <header className="Video-name">
          <h1>{title}</h1>
        </header>
        <div>video is here</div>
        {/*  <iframe
       width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>  */}
        <div className="num-clicks">Number of clicks: {rating}</div>
        <button className="btn-remove-vid" onClick={remove}>
          remove video
        </button>
        <button className="add-like" onClick={like}>
          like this video
        </button>
        <button className="remove-like">unlike this video</button>
      </div>
    </div>
  );
}

export default Video;
