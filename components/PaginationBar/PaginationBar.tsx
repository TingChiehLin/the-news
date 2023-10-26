import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'

interface PagnationBarTypeProp { 
  currentPage: number,  
  totalPage: number,
  handleCurPage: (number: number) => void,
  handlePrevPage: () => void,
  handleNextPage: () => void,
}

const PagnationBar:React.FC<PagnationBarTypeProp> = ({currentPage, totalPage, handleCurPage, handlePrevPage, handleNextPage}) => {
  const firstPage = currentPage <= 1;
  const lastPage = currentPage >= totalPage;

  return (
    <nav className="flex items-center justify-between border-t border-slate-200 px-4 sm:px-0 mt-16">
      <div className="-mt-px flex w-0 flex-1">
        <button
          onClick={handlePrevPage}
          disabled={firstPage}
          className="inline-flex items-center border-t-2 border-transparent 
                     pr-1 pt-4 text-sm font-medium 
                     disabled:text-slate-500 disabled:cursor-not-allowed
                     text-slate-500 hover:border-teal-300 hover:text-teal-700"
        >
          <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-slate-300" aria-hidden="true" />
          Previous
        </button>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {
          [...Array(totalPage)].map((_, index) => {
            const pageNumber = index + 1;
            const isActive = pageNumber === currentPage;
            return (
              <button
                key={index}
                className={`
                  inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium
                  ${isActive ? 'border-teal-500 text-teal-600' :
                  'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'}
                `}
                onClick={() => handleCurPage(pageNumber)}
              >
                {pageNumber}
              </button>
            )
          })
        }
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <button
          onClick={handleNextPage}
          disabled={lastPage}
          className="inline-flex items-center border-t-2 border-transparent 
                     pr-1 pt-4 text-sm font-medium 
                     disabled:text-slate-500 disabled:cursor-not-allowed
                     text-slate-500 hover:border-teal-300 hover:text-teal-700"
        >
          Next
          <ArrowLongRightIcon className="ml-3 h-5 w-5 text-slate-300" aria-hidden="true" />
        </button>
      </div>
    </nav>
  )
}

export default PagnationBar;