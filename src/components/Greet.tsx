type GreetProps={
  name:string;
  messageCount: number
  IsLoggediin: boolean
}

export const Greet = (props:GreetProps) =>{
  return (
    <div>
      <h2>
      {props.IsLoggediin
      ? `welcome  ${props.name}! you have ${props.messageCount} unread messages`
      : `welcome Geust`}
      </h2>
      
      </div>

  )
}