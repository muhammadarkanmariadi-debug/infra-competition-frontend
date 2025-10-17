"use client"
import { useState } from "react";

export default function AspirasiPage() {
    const [aspirasi, setAspirasi] = useState('');
    return(
        <div className="py-20">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="mb-10 font-bold text-black text-3xl text-center">Form Aspirasi</h1>
                <textarea name="" id="" onChange={(e) => setAspirasi(e.target.value)} className="px-2 py-2 border-1 rounded-2xl w-3/4">Masukkan aspirasi anda</textarea>
            </div>
        </div>
    )
}