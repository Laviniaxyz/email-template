"use client"
const sendEmail = async () => {
    await fetch("/api/send", {method: "POST"})
}
const Home = () => {
    return <main>
        <button  onClick={sendEmail}>Send email</button>
    </main>
}

export default Home