import{a as e,r as s,j as t,c as r,s as a}from"./index-BaW1cT8h.js";function o(){const{user:o}=e(),[i,c]=s.useState({subject:"",message:"",category:"general"}),[l,d]=s.useState(!1);function n(e){const{name:s,value:t}=e.target;c((e=>({...e,[s]:t})))}return t.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[t.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Help & Support"}),t.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[t.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-6",children:"Submit a Support Ticket"}),t.jsxs("form",{onSubmit:async function(e){if(e.preventDefault(),o)try{d(!0);const{error:e}=await a.from("support_tickets").insert([{user_id:o.id,subject:i.subject,message:i.message,category:i.category,status:"open"}]);if(e)throw e;r.success("Support ticket submitted successfully"),c({subject:"",message:"",category:"general"})}catch(s){r.error("Failed to submit support ticket")}finally{d(!1)}else r.error("Please sign in to submit a support ticket")},className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{htmlFor:"category",className:"block text-sm font-medium text-gray-700",children:"Category"}),t.jsxs("select",{id:"category",name:"category",value:i.category,onChange:n,required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",children:[t.jsx("option",{value:"general",children:"General Inquiry"}),t.jsx("option",{value:"technical",children:"Technical Issue"}),t.jsx("option",{value:"billing",children:"Billing Issue"}),t.jsx("option",{value:"account",children:"Account Issue"}),t.jsx("option",{value:"other",children:"Other"})]})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700",children:"Subject"}),t.jsx("input",{type:"text",id:"subject",name:"subject",value:i.subject,onChange:n,required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700",children:"Message"}),t.jsx("textarea",{id:"message",name:"message",rows:6,value:i.message,onChange:n,required:!0,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"})]}),t.jsx("button",{type:"submit",disabled:l,className:"inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed",children:l?"Submitting...":"Submit Ticket"})]})]}),t.jsxs("div",{className:"mt-12",children:[t.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Frequently Asked Questions"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[t.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"How do I book a service?"}),t.jsx("p",{className:"text-gray-500",children:'To book a service, browse through our available services, select the one you need, and click on the "Book Now" button. Follow the booking process to schedule your service at your preferred time.'})]}),t.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[t.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"How do I become a service provider?"}),t.jsx("p",{className:"text-gray-500",children:'To become a service provider, register for an account and select "Service Provider" as your user type. Complete your profile, add your services, and start accepting bookings from customers.'})]}),t.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[t.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"How do I contact a service provider?"}),t.jsx("p",{className:"text-gray-500",children:"You can contact a service provider through our messaging system. Once you've booked a service or viewed a provider's profile, you'll have access to send them messages."})]}),t.jsxs("div",{className:"bg-white shadow rounded-lg p-6",children:[t.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"What payment methods do you accept?"}),t.jsx("p",{className:"text-gray-500",children:"We accept all major credit cards, debit cards, and digital payment methods. Payment is processed securely through our payment partners."})]})]})]})]})}export{o as default};
