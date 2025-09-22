# 🎯 AI Career Navigator for High School Students  
*(Project for **IMPACTEERS X AMS Hackathon**)*  

---

## 📌 Overview  
The **AI Career Navigator** helps high school students discover career paths based on their background and interests.  
It uses **AI models**, **Firebase services**, and a **responsive frontend** to provide personalized recommendations and share results with counselors via WhatsApp.  

---

## 🏗️ System Architecture  

### 1. Frontend (React + Tailwind + Vite)  
- ✅ Responsive UI (Mobile & Desktop)  
- ✅ Navbar (About Us, Team)  
- ✅ Auth (Login/Signup with Firebase Email/Password)  
- ✅ Profile Form (Collects: Name, Age, Nationality, Income)  
- ✅ Quiz (5 Career Questions with Icons & Appreciation Messages)  
- ✅ Results Page (Career Recommendations & Courses)  
- ✅ WhatsApp Share (Send responses + results to counselor)  

---

### 2. Backend Services  
- 🔐 **Firebase Auth** → User authentication  
- 💾 **Firebase Realtime Database** → Store profile + quiz answers  
- ⚙️ **AI Service Layer (`aiService.ts`)** → Communicates with AI Models  

---

### 3. AI Models  
- 🤖 **Model A:** `x-ai/grok-4-fast:free` → First draft career mapping  
- 🤖 **Model B:** `openai/gpt-3.5-turbo` → Refines output, final recommendations  

---

### 4. Integration Workflow  
1. User submits quiz  
2. Data stored in **Firebase Database**  
3. **AI Service** calls **Grok**  
4. Output refined by **GPT**  
5. Career Path + Courses displayed as **Cards**  
6. Final results shared via **WhatsApp API**  

---

### 5. Data Flow  
