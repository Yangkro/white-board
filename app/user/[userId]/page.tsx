interface UserIdPageProps {
    params: { userId: string }
}
const Page = ({params}:UserIdPageProps) =>{
    return (
        <div>
           <div>
           User id : {params.userId}
           </div>
        </div>
    )
}

export default Page