const enum FormClasses {
  TITLE = 'text-xl font-bold mb-8 text-center',
  SITCH_PAGE_LINKS_WRAPPER = 'w-full bg-zinc-200 flex justify-between p-1 rounded mb-10 sm:mb-20',
  ACTIVE_LINK = 'w-6/12 rounded text-center p-2 hover:bg-zinc-300',
  DISABLE_LINK = 'bg-white rounded w-6/12 text-center p-2 cursor-default drop-shadow-sm',
  FORM = 'px-2 sm:px-0',
  FORM_CONTAINER = 'flex justify-between flex-wrap',
  GENERAL_FIELD = 'w-full border-b-2 border-zinc-200 py-3 px-1',
  FULL_FIELD = 'w-full',
  HALF_FIELD = 'w-full sm:w-[47%]',
  MISTAKE_TEXT = 'text-sm text-red-500 h-5',
  MISTAKE_TEXT_LOGIN = 'text-xl text-red-500 text-center mb-3',
  ADDRESS_TITLE = 'py-2 px-1 font-bold',
  CHECKBOX = 'mr-2 inline-block my-3',
  BIRTDAY_LABEL = 'text-gray-400 mr-5',
  SUBMIT_BTN = 'w-full text-center rounded bg-black p-3 text-white uppercase drop-shadow-sm hover:bg-slate-600 cursor-pointer',
  COUNTRY_OPTION_TEXT = 'text-gray-400',
}

export default FormClasses;
