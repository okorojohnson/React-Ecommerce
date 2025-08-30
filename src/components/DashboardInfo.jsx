const DashboardInfo = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 p-6 bg-white">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 text-sm text-gray-800 space-y-4">
        <div>Account Dashboard</div>
        <div>Account Information</div>
        <div>Address Book</div>
        <div>My Orders</div>
        <div>My Wishlist</div>
        <div>Newsletter Subscriptions</div>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 space-y-10 text-sm text-gray-700">
        {/* Account Information */}
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">
            Account Information
          </h2>
          <div className="space-y-1">
            <p>Contact Information:</p>
            <p className="font-medium">Alex Driver</p>
            <p>ExampleAddress@gmail.com</p>
            <div className="mt-2 flex gap-4 text-blue-600">
              <button>Edit</button>
              <button>Change Password</button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscriptions */}
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">
            Newsletters
          </h2>
          <p>You don't subscribe to our newsletter.</p>
          <div className="mt-2 text-blue-600">
            <button>Edit</button>
          </div>
        </section>

        {/* Address Book */}
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-2">
            Address Book
          </h2>
          <div className="space-y-6">
            <div>
              <p className="font-medium">Default Billing Address:</p>
              <p>You have not set a default billing address.</p>
              <div className="mt-1 text-blue-600">
                <button>Edit Address</button>
              </div>
            </div>
            <div>
              <p className="font-medium">Default Shipping Address:</p>
              <p>You have not set a default shipping address.</p>
              <div className="mt-1 text-blue-600">
                <button>Edit Address</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardInfo;
