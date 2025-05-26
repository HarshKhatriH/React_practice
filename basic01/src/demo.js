export default function Demo(props)
{
  const {name1,avatar_url,title,skillsets} = props;

  
 
  return(
    <div>
      <p>{name1}</p>
      <p>{avatar_url} </p>
      <p>{title} </p>
      <p>{skillsets} </p>
    </div>
  )
}