import React from "react";


const FavoritesEmpty = () => {
   
    return (
        <div className="min-w-320 s:w-full sm:w-full md:w-full xl:w-full mx-auto flex flex-col text-center -mb-2.5">
        <div className="bg-category sm:bg-Sea bg-no-repeat bg-cover bg-center">
          <div className="flex flex-wrap justify-center flex-col p-4">
            <div className="flex justify-center items-center w-60 mb-5 mx-auto mt-4">
              <div>
                <svg width="18" height="40" viewBox="0 0 18 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.29861 0.676131C11.9011 -0.845163 18 0.676131 18 0.676131C18 0.676131 10.5 6.22222 8.29861 9.77778C4.22439 16.3582 4.23094 23.5299 8.29861 30.2222C11 34.6667 18 39.3239 18 39.3239C18 39.3239 11.9011 40.8452 8.29861 39.3239C-2.7662 34.6513 -2.7662 5.34868 8.29861 0.676131Z" fill="white"/>
                </svg>
              </div>
              <h1 className="text-white w-full text-xl font-semibold px-5 flex-shrink-0">Избранное</h1>
              <div>
                <svg width="18" height="40" viewBox="0 0 18 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.70139 39.3239C6.09889 40.8452 0 39.3239 0 39.3239C0 39.3239 7.5 33.7778 9.70139 30.2222C13.7756 23.6418 13.7691 16.4701 9.70139 9.77777C7 5.33333 0 0.676132 0 0.676132C0 0.676132 6.09889 -0.845161 9.70139 0.676132C20.7662 5.34867 20.7662 34.6513 9.70139 39.3239Z" fill="white"/>
                </svg>
              </div>
            </div>
            <div className="flex justify-center mt-16 mb-36">
                <p className="w-60 text-sm font-semibold text-center text-white">В данном разделе еще нет избранных мероприятий, как только вы добавите мероприятие в избранное, оно тут появится.</p>
            </div>
          </div>
        </div>
      </div>
    )
};

export default FavoritesEmpty;