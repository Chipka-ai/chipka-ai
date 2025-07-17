import React from "react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex flex-col items-center justify-center text-center px-6 py-12">
      <h1 className="text-4xl md:text-6xl font-extrabold text-orange-800 drop-shadow-sm mb-6">
        ChipkaAI
      </h1>
      <p className="text-lg md:text-2xl text-orange-700 max-w-xl mb-8">
        हर व्यापार, गाँव और परिवार में चिपक जाने वाला आपका AI साथी — सस्ता, सरल, सबका!
      </p>
      <Button className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-6 py-3 rounded-2xl shadow-xl">
        शुरू करें
      </Button>

      <section className="mt-16 max-w-4xl text-left">
        <h2 className="text-2xl font-bold text-orange-800 mb-4">💡 क्या कर सकता है ChipkaAI?</h2>
        <ul className="space-y-2 text-orange-700 text-lg">
          <li>✅ क्लिनिक बुकिंग और मरीज फॉलो-अप</li>
          <li>✅ गांव में जनसमस्या सुनना और ट्रैक करना</li>
          <li>✅ दुकानों के लिए ऑर्डर और स्टॉक सहायक</li>
          <li>✅ बुजुर्गों के लिए बातचीत करने वाला ShraddhaBot</li>
          <li>✅ लोकल भाषा में सुझाव और सेवा</li>
        </ul>
      </section>

      <footer className="mt-20 text-orange-600 text-sm">
        © 2025 ChipkaAI | एक प्रयास डिजिटल भारत के लिए 🙏
      </footer>
    </main>
  );
}
