import React from "react";
import axios from "axios";

class Card extends React.Component {

    componentDidMount() {
        axios.get("https://api.github.com/users/dustinmyers/followers")
        .then((res) => {
          console.log(res.data)
          this.setState({
            followers: res.data
          })
        })
        .catch((err) => {
          console.log(err)
        })
      }

    render() {
        return(
            <div>
                {this.props.followers.map(follower => (
                    <div key={followers.length} className="follower">
                        <img src={follower.avatar_url}/>
                        <h2>{follower.name}</h2>
                    </div>

                ))}
            </div>
        )
    }
}

export default Card;