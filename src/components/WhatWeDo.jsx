const WhatWeDo = () => {
  return (
    <div className="w-fit md:max-w-screen mx-auto py-10 md:py-16 text-center">
        <h1 className="text-3xl md:text-4xl  font-medium text-zinc-800 text-center">What We Do</h1>

        {/* Bar */}
        <div className="h-0.75 w-32 my-1 bg-linear-to-br from-transparent to-zinc-600 mx-auto"></div>

        <p className="w-full md:w-xl p-5 text-sm md:text-base text-zinc-800 text-center mx-auto">
            We provide comprehensive IT Solutions, including Help Desk Support, Cybersecurity, Cloud Services, and Network Managment, to ensure your business runs smoothly and securely.
        </p>

        {/* Services */}
        <div className="flex flex-col md:flex-row gap-10 mt-5 md:mt-10 mx-auto md:mx-2 md:px-2">
            <div className="bg-white w-sm mx-auto">
                <h1 className="text-lg font-semibold text-zinc-700 p-2">IT Support</h1>
                <p>
                    Fast remote and onsite support
                    Device troubleshooting
                    Software installation
                    Printer, email, and Wi-Fi issues
                </p>
            </div>
            <div className="bg-white w-sm mx-auto">
                <h1 className="text-lg font-semibold text-zinc-700 p-2">Cybersecurity</h1>
                <p>
                    Proactive threat monitoring
                    Firewall and antivirus management
                    Employee security training
                    Data encryption and backup solutions
                </p>
            </div>
            <div className="bg-white w-sm mx-auto">
                <h1 className="text-lg font-semibold text-zinc-700 p-2">Cloud Services</h1>
                <p>
                    Cloud migration and management
                    Scalable storage solutions
                    Virtual desktop infrastructure (VDI)
                    Disaster recovery planning
                </p>
            </div>
             <div className="bg-white w-sm mx-auto">
                <h1 className="text-lg font-semibold text-zinc-700 p-2">Network Management</h1>
                <p>
                    Network design and implementation
                    Performance monitoring and optimization
                    Secure Wi-Fi solutions
                    VPN setup and management
                </p>
            </div>
        </div>

    </div>
  );
};

export default WhatWeDo;