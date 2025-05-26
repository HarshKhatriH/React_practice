export default function Skillsets({icon,desc})
{
    // const {icon,desc} = data;

    return (
        <div>
            <p> <img style={
                {
                    width:"100px",
                    height:"100px"
                }
            } src={icon} alt="icon" /> </p>
            <p>{desc}</p>
        </div>
    )
}