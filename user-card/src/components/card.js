import React ,{ useEffect }from "react";
import axios from "axios";



// const Card = (props) => {

//     useEffect(() => {
//         axios
//         .get("https://api.github.com/users/dustinmyers/followers")
//         .then((res) => {
//             console.log(res)

//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     },[]);

//     return(
//         <div>

//         </div>
//     )
// }

// export default Card;


class Card extends React.Component {

  state = {
    followers: []
  }

    componentDidMount() {
        axios
        .get("https://api.github.com/users/dustinmyers/followers")
        .then((res) => {
          console.log(res.data)
          this.setState({
            userImg: res.data.avatar_url,
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
                {this.state.followers.map(follower => (
                    <div key={follower.id} className="follower">
                        <img src={follower.avatar_url}/>
                        <h2>{follower.login}</h2>
                    </div>

                ))}
            </div>
        )
    }
}

export default Card;