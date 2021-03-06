#
# Copyright 2019 The Project Oak Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

load("@rules_cc//cc:defs.bzl", "cc_binary", "cc_library")

package(
    licenses = ["notice"],
)

cc_binary(
    name = "client",
    srcs = ["abitest.cc"],
    deps = [
        ":grpc_test_server",
        ":grpctest",
        ":httplib_config",
        ":httptest",
        "//examples/abitest/proto:abitest_cc_grpc",
        "//oak/client:application_client",
        "//oak/server/storage:memory_provider",
        "//oak/server/storage:storage_service",
        "@com_github_google_glog//:glog",
        "@com_github_grpc_grpc//:grpc++",
        "@com_google_absl//absl/flags:flag",
        "@com_google_absl//absl/flags:parse",
        "@com_google_absl//absl/strings",
    ],
)

cc_library(
    name = "httplib_config",
    hdrs = ["httplib_config.h"],
    deps = [
        "@cpp_httplib//:httplib",
    ],
)

cc_library(
    name = "grpctest",
    srcs = ["grpctest.cc"],
    hdrs = ["grpctest.h"],
    deps = [
        "//examples/abitest/proto:abitest_cc_grpc",
        "@com_github_google_glog//:glog",
        "@com_github_grpc_grpc//:grpc++",
    ],
)

cc_library(
    name = "httptest",
    srcs = ["httptest.cc"],
    hdrs = ["httptest.h"],
    deps = [
        ":httplib_config",
        "//oak/common:label",
        "@com_github_google_glog//:glog",
    ],
)

cc_library(
    name = "grpc_test_server",
    srcs = ["grpc_test_server.cc"],
    hdrs = ["grpc_test_server.h"],
    deps = [
        "//examples/abitest/proto:abitest_cc_grpc",
        "@com_github_google_glog//:glog",
        "@com_github_grpc_grpc//:grpc++",
    ],
)
