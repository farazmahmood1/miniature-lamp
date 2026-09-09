import ListRow2 from "../components/list-row2";
import ListRow3, { type ListRow3Data } from "../components/list-row3";
import ListRow4 from "../components/list-row4";
import { listRow2Data as listRow2DataContent, listRow4Data as listRow4DataContent } from "../content";
const ListRow3_data: ListRow3Data[] = [
    { description: "Pause execution:", description2: " pause all application processes, threads, and, crucially, GPU work." },
    { description: "Dump memory:", description2: " serialize the in-memory state from both CPU and GPU to files." },
    { description: "Upload:", description2: " push those files to fast, durable storage." }
];
/** Where Do The section. */
export default function WhereDoTheSection({ listRow2Data = listRow2DataContent, listRow3Data = ListRow3_data, listRow4Data = listRow4DataContent } = {}) {
  return (
    <div className="block">
      <div className="grid gap-5 grid-cols-12 max-lg:gap-[0.9375rem] max-lg:grid-cols-1">
        <div className="block col-start-[span_4] col-end-[span_4] max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
          <p className="h-[277.7px] block sticky top-24.5 pb-20 text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] text-balance max-lg:hidden 2xl:h-[13.875rem] 2xl:text-[2.5625rem] 2xl:leading-[2.9375rem] 2xl:tracking-[-1.03px]">
            {" Reducing GPU Cold Starts with Memory Snapshots: Restoring CUDA Workloads in Seconds "}
          </p>
          {" "}
        </div>
        {" "}
        <div className="w-[793.3px] block min-w-0 col-start-[span_8] col-end-[span_8] max-md:w-[21.5625rem] max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial] md:max-lg:w-184.5 2xl:w-305">
          <c-article-body class="inline" id="articlebody-48">
            {" "}
            <div className="w-full max-w-[66.8rem] block leading-7">
              <div className="block max-w-[66.8rem]">
                <p className="block mb-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:mb-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  If you run AI models in production, you have a relationship with cold starts whether you want one or not.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  A three-minute startup time changes how you scale. You keep GPUs warm that could have been released. You over-provision to avoid making users wait. You stretch cooldown periods because scaling down too quickly creates pain on the next spike. The application starts accumulating complexity around one problem: getting a model ready to serve traffic fast enough.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  At Cerebrium, we have been obsessed with the cold start problem since day one. That obsession has pushed us to rethink almost every layer of our infrastructure:
                </p>
                <ul className="block my-[22.5px] pl-[29.3px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [list-style-type:disc] list-outside max-lg:my-[21.3px] max-lg:pl-[1.725rem] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} />)}
                  <li className="list-item my-[0.5625rem] pl-[0.425rem] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[8.5px] max-lg:pl-[0.4rem]">
                    <p className="block my-[22.5px] max-lg:my-[21.3px]">
                      CPU and GPU memory snapshots for restoring fully warmed containers in seconds
                    </p>
                  </li>
                </ul>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  As more companies move large custom AI models into production, they hit the same wall. Our customers run large language models, real-time avatars, transcription models, diffusion models, and other GPU-heavy workloads where startup time can vary from a few seconds to more than five minutes.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Most of that time is spent on work that gets a container ready to serve requests: importing libraries, loading model weights, initializing CUDA, compiling kernels, and warming up the runtime. That is the core problem checkpointing solves. Instead of rebuilding the same runtime from scratch each time a new container starts, we snapshot the fully initialized container - including CPU memory, GPU memory, process state, model weights, and compiled kernels - and restore it directly into a new container in a fraction of the time.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  For some workloads, this reduces cold start time by more than 80%!
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  This post explains how we built CPU and GPU memory checkpointing at Cerebrium, how it works inside our highly customised gVisor-based runtime, and what it took to make real CUDA workloads like vLLM restore reliably and quickly.
                </p>
                <h3 className="block mt-[3.1875rem] mb-[25.5px] text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:mt-10 max-md:mb-5 max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:mt-[44.7px] md:max-lg:mb-[22.3px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:mt-[3.6875rem] 2xl:mb-[29.5px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                  Where do the minutes actually go?
                </h3>
                <p className="block mb-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:mb-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  It's tempting to think of cold starts as simply “pulling the image”: downloading the application image onto the machine that will run the container. But for AI workloads, that is only the first part of getting a model ready to serve traffic and it is no longer the bottleneck. We have
                  <a className="inline text-primary font-medium underline cursor-pointer" data-component="link" href="/blog/rethinking-container-image-distribution-to-eliminate-cold-starts">
                    {" solved the container download problem already"}
                  </a>
                  . The real cost in a CPU or GPU container is everything that happens after the image is on the machine and the application starts initializing.
                </p>
                <div className="block my-[3.4375rem] max-md:my-10 md:max-lg:my-[46.3px] 2xl:my-[65.7px]">
                  <c-dato-image class="inline" id="datoimage-36">
                    {" "}
                    <picture className="w-[49.5625rem] h-19.5 block my-8 text-clr-2 bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-[21.5625rem] max-md:h-8.5 md:max-lg:w-184.5 md:max-lg:h-18 2xl:w-[66.8125rem] 2xl:h-[6.5625rem]" style={{ backgroundImage: "url(data:image/jpeg" }}>
                      <source className="inline" sizes="(max-width: 1000px) 100vw, 1000px" srcSet="/assets/blog-detail/images/b2e8c1fa4f1f.png 250w, /assets/blog-detail/images/5ece2483f35b.png 500w, /assets/blog-detail/images/2793cff9dfaa.png 750w, /assets/blog-detail/images/09fbfe0c6c7c.png 1000w, /assets/blog-detail/images/797b7f88f735.png 1500w, /assets/blog-detail/images/9ae3f894d992.png 2000w, /assets/blog-detail/images/dba132929ae2.png 3000w, /assets/blog-detail/images/a0df2700860f.png 4000w" />
                      {" "}
                      <img className="w-full h-19.5 block max-w-full overflow-clip aspect-[1000/98] align-middle max-md:h-8.5 md:max-lg:h-18 2xl:h-[6.5625rem]" data-component="image" alt="" src="/assets/blog-detail/images/09fbfe0c6c7c.png" title="Timeline of vLLM workload from initialisation to ready state" />
                      {" "}
                    </picture>
                    {" "}
                  </c-dato-image>
                  {" "}
                </div>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  That initialization path includes importing Python modules, loading PyTorch, assembling model weights, copying them onto the GPU, and running the framework’s warmup path - torch.compile, CUDA graph capture, KV cache initialization, and whatever else the serving stack needs before it can take traffic.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Every one of these stages is deterministic.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Importing PyTorch produces the same loaded modules every time. Building the model and copying weights onto the GPU produces the same bytes in GPU memory every time. torch.compile and CUDA graph capture produce the same kernels every time.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Yet on every scale-up, we pay to recompute a result that is known.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  That is what checkpointing changes.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  The idea is simple: do the expensive startup work once, freeze the result, and restore it on demand.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Concretely, taking a checkpoint means:
                </p>
                <ol className="block my-[22.5px] pl-[29.3px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [list-style-type:decimal] list-outside max-lg:my-[21.3px] max-lg:pl-[1.725rem] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} />)}
                </ol>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Restoring runs the same process in reverse. We pull the checkpoint files down, rehydrate CPU and GPU memory, repair the pieces of state that cannot survive a move, and unpause the workload.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  The restored application process is the same warmed-up runtime we froze earlier: PyTorch has already been imported, model weights are already resident on the GPU, kernels are already compiled, and the application is ready to serve traffic.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  The mental model is straightforward. Making it work reliably for real GPU workloads is not.
                </p>
                <h3 className="block mt-[3.1875rem] mb-[25.5px] text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:mt-10 max-md:mb-5 max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:mt-[44.7px] md:max-lg:mb-[22.3px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:mt-[3.6875rem] 2xl:mb-[29.5px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                  High-level architecture
                </h3>
                <p className="block mb-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:mb-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  At a high level, checkpointing needs to sit in the one place where it can control the full lifecycle of a container: between the container runtime and the sandbox running the workload.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Cerebrium runs user workloads inside
                  <a className="inline text-primary font-medium underline cursor-pointer" data-component="link" href="https://gvisor.dev/">
                    {" gVisor"}
                  </a>
                  {" sandboxes for isolation. To support checkpointing, we extended that runtime path so that when a container starts, we can make a decision before the normal boot sequence completes:"}
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  <strong className="inline font-semibold">
                    Should this container start from scratch, or should it be restored from a checkpoint?
                  </strong>
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  If no checkpoint exists, the container follows the normal path. The image starts, the application boots, models load, GPU memory is populated, and the workload becomes ready. Once the container is fully warmed, the user can trigger a checkpoint. At that point, we pause the workload, capture its CPU and GPU state, write the checkpoint to disk, and upload it to fast storage.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  If a checkpoint does exist, we skip the normal startup path. Instead of launching the container and waiting for Python imports, model loading, GPU transfers, torch.compile, and CUDA graph capture, we restore the saved state directly into the sandbox. The process resumes as if it had just finished warming up.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  That sounds simple, but it requires the runtime to answer a few questions at exactly the right time:
                </p>
                <ul className="block my-[22.5px] pl-[29.3px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [list-style-type:disc] list-outside max-lg:my-[21.3px] max-lg:pl-[1.725rem] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} />)}
                </ul>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  To make this work, we added two components to the node runtime.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  The first is a small checkpoint service that runs on every host. It handles the operational side of checkpointing: downloading checkpoints, uploading new ones, caching them locally, evicting old or corrupted checkpoints, and reporting restore status.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  The second is a modified gVisor containerd shim. This is the piece that sits in the container startup path. It intercepts container creation, checks whether a checkpoint can be restored, and either continues with the normal boot flow or replaces that flow with a restore.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  In other words, the checkpoint service moves and manages the snapshot files. The shim decides whether a new container should boot normally or wake up from a snapshot.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  The hardest part was not the API between those two components. It was timing.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  <em className="inline italic">
                    Containerd
                  </em>
                  {" starts a sandbox through a fixed sequence:"}
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Sandbox Create → Sandbox Start → Container Create → Container Start
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  The natural place to decide whether to restore is when the sandbox starts. But at that point, we do not yet have enough information about the container image to know whether a checkpoint exists. The image information only becomes available later, during container creation.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  So we had to reorder the startup sequence slightly.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  {"When "}
                  <em className="inline italic">
                    containerd
                  </em>
                  {" asks us to start the sandbox, we defer the real start. We keep containerd satisfied with the expected status responses, but delay the actual sandbox startup until container creation, once we know which image is being launched and whether a matching checkpoint exists."}
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  At that point, we choose one of two paths:
                </p>
                <ol className="block my-[22.5px] pl-[29.3px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [list-style-type:decimal] list-outside max-lg:my-[21.3px] max-lg:pl-[1.725rem] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  <li className="list-item my-[0.5625rem] pl-[0.425rem] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[8.5px] max-lg:pl-[0.4rem]">
                    <p className="block my-[22.5px] max-lg:my-[21.3px]">
                      <strong className="inline font-semibold">
                        Normal boot:
                      </strong>
                      {" start the sandbox, launch the container, let the application initialize, and optionally checkpoint it once warm."}
                    </p>
                  </li>
                  <li className="list-item my-[0.5625rem] pl-[0.425rem] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[8.5px] max-lg:pl-[0.4rem]">
                    <p className="block my-[22.5px] max-lg:my-[21.3px]">
                      <strong className="inline font-semibold">
                        Checkpoint restore:
                      </strong>
                      {" download or locate the checkpoint, restore CPU and GPU memory into the sandbox, repair runtime state that cannot survive a move, and resume the process."}
                    </p>
                  </li>
                </ol>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  The work is mostly the same work the runtime would already do. The key change is that we moved the restore decision from sandbox start to container creation, where the image information is finally available and we can determine whether a matching checkpoint exists.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  That small reordering is what lets checkpointing feel transparent from the user’s perspective. They start a workload the same way, but once a checkpoint exists, future scale-ups restore the warmed process instead of rebuilding it from scratch.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  As we tested and developed the feature, we ran into several edge cases that were not obvious from the available documentation. Where possible, we are working to move those fixes upstream so that the next team adopting this technology does not have to rediscover the same issues.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Some of the issues we uncovered included:
                </p>
                <ul className="block my-[22.5px] pl-[29.3px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [list-style-type:disc] list-outside max-lg:my-[21.3px] max-lg:pl-[1.725rem] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  <li className="list-item my-[0.5625rem] pl-[0.425rem] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[8.5px] max-lg:pl-[0.4rem]">
                    <p className="block my-[22.5px] max-lg:my-[21.3px]">
                      A race condition in the TCP network stack that stopped the network from working when the container received many packets during the checkpointing process.
                    </p>
                  </li>
                  <li className="list-item my-[0.5625rem] pl-[0.425rem] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[8.5px] max-lg:pl-[0.4rem]">
                    <p className="block my-[22.5px] max-lg:my-[21.3px]">
                      {"A race condition that crashes gVisor when running within "}
                      <em className="inline italic">
                        containerd
                      </em>
                      {" if a checkpoint takes longer than a few seconds."}
                    </p>
                  </li>
                  <li className="list-item my-[0.5625rem] pl-[0.425rem] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[8.5px] max-lg:pl-[0.4rem]">
                    <p className="block my-[22.5px] max-lg:my-[21.3px]">
                      Supporting Container Device Interface injection for NVidia GPUs.
                    </p>
                  </li>
                </ul>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  <strong className="inline font-semibold">
                    Checkpoint distribution: why the storage layer matters more than you'd think
                  </strong>
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  A checkpoint of a warmed-up GPU container is large - one of our test workloads is around 9 GiB however restoring Deepseek V4 FP8 with vLLM would be 640GB. Restoring is only worth it if we can move that much data faster than the container would have cold-started on its own. That makes the storage and network path the single most important design decision in the whole system.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  The math is unforgiving:
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  For our 9GB container size, on a g5.12xlarge, a full vLLM cold start took around 50 seconds. Restoring from a 9 GiB checkpoint reduced startup to 2.25 seconds from S3 and 9 seconds from local NVMe.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  We use S3 as the default restore path because it is fast enough and portable across the clouds and regions Cerebrium supports. Local NVMe is fast when the checkpoint is already cached on the node, while object storage remains the durable source of truth.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  These results are specific to g5.12xlarge. On nodes with higher network bandwidth or faster local storage, restore times improve further.
                </p>
                <div className="block my-[3.4375rem] max-md:my-10 md:max-lg:my-[46.3px] 2xl:my-[65.7px]">
                  <c-dato-image class="inline" id="datoimage-37">
                    {" "}
                    <picture className="w-[49.5625rem] h-19 block my-8 text-clr-2 bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-[21.5625rem] max-md:h-[2.0625rem] md:max-lg:w-184.5 md:max-lg:h-[4.4375rem] 2xl:w-[66.8125rem] 2xl:h-[6.4375rem]" style={{ backgroundImage: "url(data:image/jpeg" }}>
                      <source className="inline" sizes="(max-width: 1000px) 100vw, 1000px" srcSet="/assets/blog-detail/images/d9282c83583d.png 250w, /assets/blog-detail/images/598c4e2cbc33.png 500w, /assets/blog-detail/images/644355326979.png 750w, /assets/blog-detail/images/5b42de6b6543.png 1000w, /assets/blog-detail/images/db52bd2f5fb9.png 1500w, /assets/blog-detail/images/5e82bf9feecf.png 2000w, /assets/blog-detail/images/9eb891af9fec.png 3000w, /assets/blog-detail/images/5c623d499133.png 4000w" />
                      {" "}
                      <img className="w-full h-19 block max-w-full overflow-clip aspect-[1000/96] align-middle max-md:h-[2.0625rem] md:max-lg:h-[4.4375rem] 2xl:h-[6.4375rem]" data-ditto-id="motion-image" data-component="image" alt="" src="/assets/blog-detail/images/5b42de6b6543.png" title="Timeline of vLLM workload from initialisation to ready with snapshots" />
                      {" "}
                    </picture>
                    {" "}
                  </c-dato-image>
                  {" "}
                </div>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  <strong className="inline font-semibold">
                    The hard part: real workloads are messy
                  </strong>
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Checkpointing is easiest when the workload’s state is self-contained to memory. Real GPU workloads are rarely that clean.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  A snapshot can preserve the warmed-up runtime, but it cannot blindly preserve every external dependency around it. After restore, the application may still hold references to a filesystem path, socket, IP address, device handle, or driver state that was valid before the move but invalid after it. That is where most of the finicky behavior comes from.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Network state is the first obvious example. Open TCP connections are tied to the original runtime environment. After restore, those connections have been terminated, and the container may also have a different external IP. This breaks frameworks that use the container’s external IP for internal heartbeats, worker coordination, or control-plane communication. In vLLM, for example, this meant the process could restore successfully but still fail internally because parts of the runtime were trying to communicate through an address that was no longer valid. The fix was to pin internal framework communication to loopback using VLLM_HOST_IP=127.0.0.1, so that worker coordination no longer depended on the external IP assigned to the container.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  {"Multiprocessing creates another class of problems. Many Python serving frameworks use worker processes, and if those workers are created with fork, they can inherit NVIDIA driver file descriptors from the parent process. That matters because the checkpoint system needs a clean understanding of which processes actually own GPU state. Leaked driver file descriptors can make the runtime believe the GPU is still in use by processes that should not block checkpointing, or cause restore behavior that is difficult to reason about. For vLLM, the fix was to use spawn instead of fork for GPU workers with "}
                  <em className="inline italic">
                    VLLM_WORKER_MULTIPROC_METHOD=spawn
                  </em>
                  , so child processes start cleanly instead of inheriting GPU driver state from the parent.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Local runtime files are another subtle edge. Frameworks often create Unix sockets, temporary files, lock files, and coordination state on local disk. If that local filesystem is not restored with the checkpoint, the process can wake up expecting files that no longer exist. This is one of the more annoying failure modes because the process may look healthy from the outside while workers silently fail to communicate internally. In vLLM, we solved this by moving restore-critical RPC state to a small preserved path using VLLM_RPC_BASE_PATH=/run/cuda-ckpt.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  The timing of the checkpoint also matters. A checkpoint needs a consistent view of CPU and GPU memory. If CUDA work is still running while the snapshot is taken, the checkpoint may be inconsistent or unsafe to restore. In practice, this means checkpointing has to happen after the workload has finished warming up and reached a known idle state. For some frameworks, that requires an explicit readiness step: load the model, run the warmup pass, wait for compilation or CUDA graph capture to finish, and only then trigger the checkpoint.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Another optimization is deciding what should not be checkpointed. vLLM sleep mode is useful here because it can drop transient state like the KV cache before the checkpoint is taken. The KV cache can be large, and preserving it makes the checkpoint bigger, slower to upload, and slower to restore. For many workloads, the cache is not worth carrying across restores because it is request-specific and can be rebuilt naturally once traffic resumes. In those cases, putting vLLM into sleep mode before checkpointing dramatically reduces the snapshot size and improves restore performance. We expose this as a choice rather than forcing one behavior: users can decide whether they want to preserve that state across restores or discard it to make checkpointing faster.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  The last constraint is compatibility. A GPU memory checkpoint is not a portable artifact in the same way a container image is. It is tied to the environment it was created in: GPU type, CPU architecture, machine type, driver/runtime compatibility, and gVisor version. A checkpoint created on one hardware and runtime shape cannot safely be restored onto an arbitrary other one. Because of that, we key checkpoints by compatibility, not just by application. The restore path only uses a checkpoint when the target environment matches the original checkpoint environment.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  The bigger pattern is that GPU memory checkpointing is not just “dump memory and reload it.” It is about separating state that can be frozen from state that must be recreated, reconnected, or moved into a checkpoint-safe location.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  That is also why the feature is opt-in and workload-aware. Different serving stacks depend on different filesystems, sockets, device handles, networking assumptions, and framework internals. Making checkpointing production-ready means validating those assumptions explicitly, rather than treating every GPU workload as if it can be paused, moved, and resumed in exactly the same way.
                </p>
                <h3 className="block mt-[3.1875rem] mb-[25.5px] text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:mt-10 max-md:mb-5 max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:mt-[44.7px] md:max-lg:mb-[22.3px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:mt-[3.6875rem] 2xl:mb-[29.5px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                  The results: 71% Reduction in cold starts
                </h3>
                <p className="block mb-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:mb-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  We benchmarked Cerebrium against Baseten and Modal across six workloads of varying functionality. For each workload, we ran 100 cold-start requests over a 24-hour period on the same GPU classes across providers (A10, L40s, etc).
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  This is not a perfect apples-to-apples comparison. Each platform controls its own underlying node shape, and a workload running on a g6e.48xlarge can perform differently from a cold start perspective from the same workload on a g6e.12xlarge. Across platforms, users do not always get control over that exact placement. Still, this reflects the real-world experience customers care about: how quickly and consistently a workload becomes ready when the platform has to scale from cold.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Baseten references snapshotting in some materials, but we were unable to use it as a generally available, self-serve feature during our benchmark. As a result, we compared against their cached cold-start behavior, which was the reproducible path available to us. Caching helps reduce image and model download time, but it does not remove framework initialization or GPU warmup work. For workloads dominated by CUDA graph capture, torch.compile, SGLang startup, or serving-runtime preparation, that post-download work is often the expensive part.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Across the benchmark suite, Cerebrium snapshots reduced cold starts by an average of 71% compared to running the same workloads on Cerebrium without snapshots, with reductions as high as 88% on vLLM. Compared to Baseten’s cached cold-start numbers, Cerebrium snapshots were 85% faster on average, and up to 94% faster on vLLM.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  {"Against Modal snapshots, Cerebrium had a lower p0 restore time on 4 of the 6 workloads, with an average p0 restore time that was ~21% lower across the suite. More importantly, Cerebrium had a lower worst-case restore time on all 6 workloads, with an average max restore time that was ~27% lower. That consistency matters for cold starts: a single slow restore can still create a bad end-user experience. You can see our full benchmark implementations "}
                  <a className="inline text-primary font-medium underline cursor-pointer" data-component="link" href="https://github.com/CerebriumAI/examples/tree/master/13-misc/2-snapshot-benchmarks" target="_blank">
                    here
                  </a>
                </p>
                <div className="block my-[3.4375rem] max-md:my-10 md:max-lg:my-[46.3px] 2xl:my-[65.7px]">
                  <c-dato-image class="inline" id="datoimage-38">
                    {" "}
                    <picture className="w-[49.5625rem] h-[30.6875rem] block my-8 text-clr-2 bg-cover [background-position:50%_50%] bg-no-repeat max-md:w-[21.5625rem] max-md:h-[13.3125rem] md:max-lg:w-184.5 md:max-lg:h-114 2xl:w-[66.8125rem] 2xl:h-[41.3125rem]" style={{ backgroundImage: "url(data:image/jpeg" }}>
                      <source className="inline" sizes="(max-width: 917px) 100vw, 917px" srcSet="/assets/blog-detail/images/3432bc91662c.png 229w, /assets/blog-detail/images/8e090db5bce4.png 458w, /assets/blog-detail/images/e2c8e79c0d53.png 687w, /assets/blog-detail/images/c9bbf93f6297.png 917w" />
                      {" "}
                      <img className="w-full h-[30.6875rem] block max-w-full overflow-clip aspect-[917/567] align-middle max-md:h-[13.3125rem] md:max-lg:h-114 2xl:h-[41.3125rem]" data-ditto-id="motion-image-2" data-component="image" alt="" src="/assets/blog-detail/images/c9bbf93f6297.png" title="p0 Cold start benchmarks across providers" />
                      {" "}
                    </picture>
                    {" "}
                  </c-dato-image>
                  {" "}
                </div>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Checkpointing is not the right tool for every workload. If your application already starts in a few seconds, caching may be enough. But when cold starts are dominated by deterministic initialization, importing frameworks, loading models, compiling kernels, capturing CUDA graphs, or warming KV caches - checkpointing changes the scaling model. You can scale down more aggressively when traffic drops, restore quickly when demand returns, and avoid keeping GPUs warm just to protect users from cold starts. That means better utilization, lower infrastructure costs, and a better experience for end customers because capacity can come online fast enough to meet demand.
                </p>
                <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  {"If you want to try checkpointing, check out our docs "}
                  <a className="inline text-primary font-medium underline cursor-pointer" data-component="link" href="/docs/performance/checkpointing" target="_blank">
                    here
                  </a>
                  {" and our "}
                  <a className="inline text-primary font-medium underline cursor-pointer" data-component="link" href="https://github.com/CerebriumAI/examples" target="_blank">
                    examples repo.
                  </a>
                </p>
                <p className="block mt-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:mt-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                  Want serverless GPUs that start in seconds instead of minutes?
                  <a className="inline text-primary font-medium underline cursor-pointer" data-component="link" href="/">
                    {" Sign up for Cerebrium "}
                  </a>
                  and deploy your first model in a few lines of code
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </c-article-body>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
