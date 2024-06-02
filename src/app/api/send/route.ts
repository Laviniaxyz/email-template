import { Resend } from 'resend';
import EmailBenefits from "@/emails/EmailBenefits";
import { NextResponse} from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'lavinia.tole92@gmail.com',
            subject: 'How to win at Email marketing',
            react: EmailBenefits(),
        });
    } catch (error) {
        console.error(error)
        return NextResponse.json({error})
    }

}