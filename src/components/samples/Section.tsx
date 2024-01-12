import  { ReactNode } from "react"
type SectionProps = {
            title?: string,
            children: ReactNode,
}
const Section = ({ title = "My SubHeading",children }: SectionProps) => {
            return (
                        
                        <section>
                                    <h2>{title}</h2>
                                    <div className="">{ children}</div>
                        </section>
                        )
}
export default Section