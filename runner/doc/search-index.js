var searchIndex = JSON.parse('{\
"runner":{"doc":"A utility binary to run tests and orchestrate examples and…","i":[[3,"Example","runner","",null,null],[12,"name","","",0,null],[12,"server","","",0,null],[12,"backend","","",0,null],[12,"applications","","",0,null],[12,"clients","","",0,null],[3,"Application","","",null,null],[12,"manifest","","",1,null],[12,"out","","",1,null],[12,"modules","","",1,null],[3,"ExampleServer","","",null,null],[12,"additional_args","","",2,null],[3,"Executable","","",null,null],[12,"target","","",3,null],[12,"additional_args","","",3,null],[4,"Target","","",null,null],[13,"Bazel","","",4,null],[12,"bazel_target","runner::Target","",5,null],[12,"config","","",5,null],[13,"Cargo","runner","",4,null],[12,"cargo_manifest","runner::Target","",6,null],[13,"Npm","runner","",4,null],[12,"package_directory","runner::Target","",7,null],[13,"Shell","runner","",4,null],[12,"script","runner::Target","",8,null],[4,"FormatMode","runner","",null,null],[13,"Check","","",9,null],[13,"Fix","","",9,null],[5,"main","","",null,[[],[["result",4],["box",3]]]],[5,"cleanup","","",null,[[]]],[5,"run_examples","","",null,[[["runexamples",3]],["step",4]]],[5,"build_wasm_module","","",null,[[["target",4]],["step",4]]],[5,"build_server","","",null,[[["buildserver",3]],["step",4]]],[5,"run_tests","","",null,[[],["step",4]]],[5,"run_tests_tsan","","",null,[[],["step",4]]],[5,"format","","",null,[[],["step",4]]],[5,"check_format","","",null,[[],["step",4]]],[5,"run_ci","","",null,[[],["step",4]]],[5,"run_example_server","","",null,[[["buildserver",3],["string",3],["vec",3],["exampleserver",3]],[["box",3],["runnable",8]]]],[5,"run_example","","",null,[[["runexamples",3],["example",3]],["step",4]]],[5,"build_application","","",null,[[["application",3]],[["box",3],["runnable",8]]]],[5,"build_docker","","",null,[[["example",3]],["step",4]]],[5,"build","","",null,[[["target",4]],[["box",3],["runnable",8]]]],[5,"run","","",null,[[["vec",3],["string",3],["executable",3]],[["box",3],["runnable",8]]]],[5,"run_client","","",null,[[["vec",3],["string",3],["executable",3]],["step",4]]],[5,"is_ignored_path","","Return whether to ignore the specified path. This is used…",null,[[["pathbuf",3]]]],[5,"is_ignored_entry","","",null,[[["direntry",3]]]],[5,"source_files","","Return an iterator of all the first-party and non-ignored…",null,[[]]],[5,"workspace_manifest_files","","Return an iterator of all known Cargo Manifest files that…",null,[[]]],[5,"is_source_code_file","","Return whether the provided path refers to a source file…",null,[[["pathbuf",3]]]],[5,"is_clang_format_file","","Return whether the provided path refers to a source file…",null,[[["pathbuf",3]]]],[5,"is_bazel_file","","Return whether the provided path refers to a Bazel file…",null,[[["pathbuf",3]]]],[5,"is_build_file","","",null,[[["pathbuf",3]]]],[5,"is_markdown_file","","Return whether the provided path refers to a markdown file…",null,[[["pathbuf",3]]]],[5,"is_dockerfile","","",null,[[["pathbuf",3]]]],[5,"is_toml_file","","",null,[[["pathbuf",3]]]],[5,"is_yaml_file","","",null,[[["pathbuf",3]]]],[5,"is_cargo_toml_file","","Return whether the provided path refers to a `Cargo.toml`…",null,[[["pathbuf",3]]]],[5,"example_toml_files","","",null,[[]]],[5,"is_example_toml_file","","",null,[[["pathbuf",3]]]],[5,"read_file","","",null,[[["pathbuf",3]],["string",3]]],[5,"is_cargo_workspace_file","","Return whether the provided path refers to a…",null,[[["pathbuf",3]]]],[5,"is_shell_script","","",null,[[["pathbuf",3]]]],[5,"run_buildifier","","",null,[[["formatmode",4]],["step",4]]],[5,"run_prettier","","",null,[[["formatmode",4]],["step",4]]],[5,"run_markdownlint","","",null,[[["formatmode",4]],["step",4]]],[5,"run_embedmd","","",null,[[["formatmode",4]],["step",4]]],[5,"run_liche","","",null,[[],["step",4]]],[5,"run_hadolint","","",null,[[],["step",4]]],[5,"run_shellcheck","","",null,[[],["step",4]]],[5,"run_clang_format","","",null,[[["formatmode",4]],["step",4]]],[5,"run_check_license","","",null,[[],["step",4]]],[5,"run_check_build_licenses","","",null,[[],["step",4]]],[5,"run_check_todo","","",null,[[],["step",4]]],[5,"run_cargo_fmt","","",null,[[["formatmode",4]],["step",4]]],[5,"run_cargo_test","","",null,[[],["step",4]]],[5,"run_cargo_doc","","",null,[[],["step",4]]],[5,"run_clang_tidy","","",null,[[],["step",4]]],[5,"run_cargo_test_tsan","","",null,[[],["step",4]]],[5,"run_cargo_clippy","","",null,[[],["step",4]]],[5,"run_cargo_deny","","",null,[[],["step",4]]],[5,"run_bazel_build","","",null,[[],["step",4]]],[5,"run_bazel_test","","",null,[[],["step",4]]],[5,"to_string","","",null,[[["pathbuf",3]],["string",3]]],[0,"internal","","",null,null],[3,"Opt","runner::internal","",null,null],[12,"dry_run","","",10,null],[12,"watch","","",10,null],[12,"commands","","",10,null],[12,"logs","","",10,null],[12,"cmd","","",10,null],[3,"RunExamples","","",null,null],[12,"application_variant","","",11,null],[12,"example_name","","",11,null],[12,"build_server","","",11,null],[12,"run_server","","",11,null],[12,"client_variant","","",11,null],[12,"client_additional_args","","",11,null],[12,"server_additional_args","","",11,null],[12,"build_docker","","",11,null],[3,"BuildServer","","",null,null],[12,"server_variant","","",12,null],[12,"server_rust_toolchain","","",12,null],[12,"server_rust_target","","",12,null],[12,"coverage","","",12,null],[3,"Status","","A construct to keep track of the status of the execution.…",null,null],[12,"error","","",13,null],[12,"ok","","",13,null],[12,"remaining","","",13,null],[3,"Context","","Encapsulates all the local state relative to a step, and…",null,null],[12,"opt","","",14,null],[12,"prefix","","",14,null],[3,"SingleStatusResult","","",null,null],[12,"value","","",15,null],[12,"logs","","",15,null],[3,"StepResult","","",null,null],[12,"values","","",16,null],[12,"failed_steps_prefixes","","",16,null],[3,"Cmd","","A single command.",null,null],[12,"executable","","",17,null],[12,"args","","",17,null],[12,"env","","",17,null],[3,"RunningCmd","","",null,null],[12,"child","","",18,null],[4,"Command","","",null,null],[13,"RunExamples","","",19,null],[13,"BuildServer","","",19,null],[13,"Format","","",19,null],[13,"CheckFormat","","",19,null],[13,"RunTests","","",19,null],[13,"RunTestsTsan","","",19,null],[13,"RunCi","","",19,null],[13,"Completion","","",19,null],[4,"StatusResultValue","","The outcome of an individual step of execution.",null,null],[13,"Ok","","",20,null],[13,"Error","","",20,null],[13,"Skipped","","",20,null],[4,"Step","","An execution step, which may be a single `Runnable`, or a…",null,null],[13,"Single","","",21,null],[12,"name","runner::internal::Step","",22,null],[12,"command","","",22,null],[13,"Multiple","runner::internal","",21,null],[12,"name","runner::internal::Step","",23,null],[12,"steps","","",23,null],[13,"WithBackground","runner::internal","",21,null],[12,"name","runner::internal::Step","",24,null],[12,"background","","",24,null],[12,"foreground","","",24,null],[5,"values_to_string","runner::internal","",null,[[],["string",3]]],[5,"run_step","","Run the provided step, printing out information about the…",null,[[["step",4],["status",3],["context",3]],[["pin",3],["box",3]]]],[5,"kill_process","","",null,[[]]],[5,"format_logs","","",null,[[],["string",3]]],[8,"Runnable","","A task that can be run asynchronously.",null,null],[10,"description","","Returns a description of the task, e.g. the command line…",25,[[],["string",3]]],[10,"run","","Starts the task and returns a [`Running`] implementation.",25,[[["box",3],["opt",3]],[["running",8],["box",3]]]],[8,"Running","","A task that is currently running asynchronously.",null,null],[11,"kill","","Attempts to kill the running task.",26,[[]]],[11,"stdout","","Returns an [`AsyncRead`] object to stream stdout logs from…",26,[[],[["box",3],["asyncread",8]]]],[11,"stderr","","Returns an [`AsyncRead`] object to stream stderr logs from…",26,[[],[["box",3],["asyncread",8]]]],[10,"result","","Returns the final result of the task, upon spontaneous…",26,[[["box",3]],[["pin",3],["box",3]]]],[11,"new","","",13,[[]]],[11,"update","","Guarantees that the `error`, `ok`, and `remaining` counts…",13,[[["context",3]]]],[11,"root","","",14,[[["opt",3]]]],[11,"child","","",14,[[]]],[11,"depth","","",14,[[]]],[11,"len","","Returns the number of top-level steps or commands. The…",21,[[]]],[11,"new","","",16,[[]]],[11,"new","","",17,[[],["box",3]]],[11,"new_with_env","","",17,[[["hashmap",3]],["box",3]]],[0,"check_todo","runner","",null,null],[3,"CheckTodo","runner::check_todo","A [`Runnable`] command that checks for the existence of…",null,null],[12,"path","","",27,null],[7,"PATTERN","","",null,null],[11,"new","","",27,[[["string",3]],["box",3]]],[11,"is_invalid_todo","","",27,[[]]],[0,"check_license","runner","",null,null],[3,"CheckLicense","runner::check_license","A [`Runnable`] command that checks for the existence of…",null,null],[12,"path","","",28,null],[11,"new","","",28,[[["string",3]],["box",3]]],[0,"check_build_licenses","runner","",null,null],[3,"CheckBuildLicenses","runner::check_build_licenses","A [`Runnable`] command that checks for the existence of…",null,null],[12,"path","","",29,null],[11,"new","","",29,[[["string",3]],["box",3]]],[7,"PROCESSES","runner","",null,null],[17,"DEFAULT_SERVER_RUST_TARGET","","",null,null],[17,"DEFAULT_EXAMPLE_BACKEND_RUST_TARGET","","",null,null],[17,"ALL_CLIENTS","","",null,null],[17,"NO_CLIENTS","","",null,null],[14,"spread","","Similar to the `vec!` macro, but also allows a \\\"spread\\\"…",null,null],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","runner::internal","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"to_string","","",13,[[],["string",3]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_string","","",14,[[],["string",3]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"to_owned","","",19,[[]]],[11,"clone_into","","",19,[[]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"from","","",20,[[]]],[11,"into","","",20,[[]]],[11,"to_owned","","",20,[[]]],[11,"clone_into","","",20,[[]]],[11,"to_string","","",20,[[],["string",3]]],[11,"try_from","","",20,[[],["result",4]]],[11,"try_into","","",20,[[],["result",4]]],[11,"borrow","","",20,[[]]],[11,"borrow_mut","","",20,[[]]],[11,"type_id","","",20,[[],["typeid",3]]],[11,"from","","",21,[[]]],[11,"into","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"borrow","","",21,[[]]],[11,"borrow_mut","","",21,[[]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"from","runner::check_todo","",27,[[]]],[11,"into","","",27,[[]]],[11,"try_from","","",27,[[],["result",4]]],[11,"try_into","","",27,[[],["result",4]]],[11,"borrow","","",27,[[]]],[11,"borrow_mut","","",27,[[]]],[11,"type_id","","",27,[[],["typeid",3]]],[11,"from","runner::check_license","",28,[[]]],[11,"into","","",28,[[]]],[11,"try_from","","",28,[[],["result",4]]],[11,"try_into","","",28,[[],["result",4]]],[11,"borrow","","",28,[[]]],[11,"borrow_mut","","",28,[[]]],[11,"type_id","","",28,[[],["typeid",3]]],[11,"from","runner::check_build_licenses","",29,[[]]],[11,"into","","",29,[[]]],[11,"try_from","","",29,[[],["result",4]]],[11,"try_into","","",29,[[],["result",4]]],[11,"borrow","","",29,[[]]],[11,"borrow_mut","","",29,[[]]],[11,"type_id","","",29,[[],["typeid",3]]],[11,"description","runner::internal","",17,[[],["string",3]]],[11,"run","","Run the provided command, printing a status message with…",17,[[["box",3],["opt",3]],[["running",8],["box",3]]]],[11,"description","runner::check_todo","",27,[[],["string",3]]],[11,"run","","",27,[[["box",3],["opt",3]],[["running",8],["box",3]]]],[11,"description","runner::check_license","",28,[[],["string",3]]],[11,"run","","",28,[[["box",3],["opt",3]],[["running",8],["box",3]]]],[11,"description","runner::check_build_licenses","",29,[[],["string",3]]],[11,"run","","",29,[[["box",3],["opt",3]],[["running",8],["box",3]]]],[11,"kill","runner::internal","",18,[[]]],[11,"stdout","","",18,[[],[["box",3],["asyncread",8]]]],[11,"stderr","","",18,[[],[["box",3],["asyncread",8]]]],[11,"result","","",18,[[["box",3]],[["pin",3],["box",3]]]],[11,"result","","",15,[[["box",3]],[["pin",3],["box",3]]]],[11,"clone","","",10,[[],["opt",3]]],[11,"clone","","",19,[[],["command",4]]],[11,"clone","","",11,[[],["runexamples",3]]],[11,"clone","","",12,[[],["buildserver",3]]],[11,"clone","","",13,[[],["status",3]]],[11,"clone","","",20,[[],["statusresultvalue",4]]],[11,"clone","","",15,[[],["singlestatusresult",3]]],[11,"default","runner","",2,[[],["exampleserver",3]]],[11,"eq","runner::internal","",20,[[["statusresultvalue",4]]]],[11,"fmt","runner","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","runner::internal","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",20,[[["formatter",3]],["result",6]]],[11,"hash","","",20,[[]]],[11,"clap","","",10,[[],["app",3]]],[11,"from_clap","","",10,[[["argmatches",3]]]],[11,"clap","","",19,[[],["app",3]]],[11,"from_clap","","",19,[[["argmatches",3]]]],[11,"clap","","",11,[[],["app",3]]],[11,"from_clap","","",11,[[["argmatches",3]]]],[11,"clap","","",12,[[],["app",3]]],[11,"from_clap","","",12,[[["argmatches",3]]]],[11,"augment_clap","","",10,[[["app",3]],["app",3]]],[11,"is_subcommand","","",10,[[]]],[11,"augment_clap","","",19,[[["app",3]],["app",3]]],[11,"from_subcommand","","",19,[[],["option",4]]],[11,"is_subcommand","","",19,[[]]],[11,"augment_clap","","",11,[[["app",3]],["app",3]]],[11,"is_subcommand","","",11,[[]]],[11,"augment_clap","","",12,[[["app",3]],["app",3]]],[11,"is_subcommand","","",12,[[]]],[11,"deserialize","runner","",0,[[],["result",4]]],[11,"deserialize","","",1,[[],["result",4]]],[11,"deserialize","","",2,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","","",3,[[],["result",4]]]],"p":[[3,"Example"],[3,"Application"],[3,"ExampleServer"],[3,"Executable"],[4,"Target"],[13,"Bazel"],[13,"Cargo"],[13,"Npm"],[13,"Shell"],[4,"FormatMode"],[3,"Opt"],[3,"RunExamples"],[3,"BuildServer"],[3,"Status"],[3,"Context"],[3,"SingleStatusResult"],[3,"StepResult"],[3,"Cmd"],[3,"RunningCmd"],[4,"Command"],[4,"StatusResultValue"],[4,"Step"],[13,"Single"],[13,"Multiple"],[13,"WithBackground"],[8,"Runnable"],[8,"Running"],[3,"CheckTodo"],[3,"CheckLicense"],[3,"CheckBuildLicenses"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);