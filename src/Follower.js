import React from 'react';


const Follower = ({ login, html_url: url, avatar_url: image }) => {
  return (
    <article className="card">
    <img src={image} alt={login} />
    <h4>{login}</h4>
    <a href={url} className="btn">view profile</a>
    </article>
  )
}

export default Follower
