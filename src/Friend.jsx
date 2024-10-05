export default function Friend({friend}){
    const {name, email} = friend;
    return(
        <div className="box">
            <h4 style={{color:'yellow'}}>Name: {name}</h4>
            <p style={{color: 'pink'}}>Email: {email} </p>
        </div>
    )
}