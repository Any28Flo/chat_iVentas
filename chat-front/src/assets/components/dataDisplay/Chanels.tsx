import Chanel from "./Chanel"

interface User {
    username: string
}
interface Chanels {
    id: string
    name: string,
    members: User[]
}
interface ChanelProps {
    chanels: Chanels
}
const Chanels = ({ chanels }: ChanelProps) => {
    const { members } = chanels;
    return (
        <>
            {
                (members.length > 0) ?

                    members.map((member, index) => {
                        return <Chanel key={`${member}-${index}`} username={member.username} />
                    })
                    :
                    <h1>Sin contacto</h1>
            }

        </>



    )

}
export default Chanels;