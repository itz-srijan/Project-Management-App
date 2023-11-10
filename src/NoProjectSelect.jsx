import noProjectImg from "./assets/no-project.jpg";
import Button from "./Button";
export default function NoProjectSelect({onAddProject}) {
  return (
    <div className='mt-24 text-center w-2/3 '>
      <img
        src={noProjectImg}
        alt='an empty task list'
        className='w-20 h-20 object-contain mx-auto'
      />
      <h2 className='text-xl font-bold text-stone-500 my-4'>
        No project Selected
      </h2>
      <p className='text-stone-400 mb-4'>
        Select a project or get started with a new one
      </p>
      <div className='mt-8'>
        <Button onClick={onAddProject} >Create New Project</Button>
      </div>
    </div>
  );
}
