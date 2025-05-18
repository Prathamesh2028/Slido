// pages/index.tsx
"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard')
  }

  return (
    <div className="container" >
      <button className="animatedButton" onClick={handleClick}>
        Go to Dashboard
      </button>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width:100vw;
          margin-left:90px;
          
        }

        .animatedButton {
          padding: 1rem 2rem;
          font-size: 1.25rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .animatedButton:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(118, 75, 162, 0.4);
        }
      `}</style>
    </div>
  )
}
