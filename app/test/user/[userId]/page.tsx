interface UserIdPageProps {
  params: {
    userId: string;
  };
}

const Page = ({params}: UserIdPageProps)=>{
    return (
        <div>
            <h1>
                User Page
            </h1>
            <div>
                <p>
                    User ID: {params.userId}
                </p>
            </div>
        </div>
    )
}

export default Page;