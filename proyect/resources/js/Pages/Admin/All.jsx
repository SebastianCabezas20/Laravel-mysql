import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { useForm, Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function all(props) {
    const [products, setProducts] = useState([]);
    const { data, setData, post, processing, reset, errors, get } = useForm({
        message: "",
        product: "",
    });

    useEffect(() => {
        async function getPost() {
            const response = await axios.get("product");
            setProducts(response.data);
        }
        getPost();
        console.log(products);
    }, []);

    if (products.length != 0) {
        return (
            <>
                <h1>Lista de entidades</h1>
                <button> hola</button>

                <ul>
                    <li>
                        <label>{products[0].nombre}</label>{" "}
                        <PrimaryButton> Ver</PrimaryButton>
                    </li>
                </ul>
            </>
        );
    }
    return <button> hola</button>;

    /*return (
        <div>
            <Head title="Todo" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        post(route("product.store"));
                    }}
                >
                    <textarea
                        value={data.message}
                        placeholder="What's on your mind?"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={(e) => setData("message", e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>
                        Chirp
                    </PrimaryButton>
                </form>
            </div>
        </div>
    );*/
    /*return (
        <div class="w-160">
            <ul role="list" class="divide-y divide-gray-100">
                <li class="flex justify-between gap-x-6 py-5">
                    <div class="flex gap-x-4">
                        <img
                            class="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm font-semibold leading-6 text-gray-900">
                                Leslie Alexander
                            </p>
                            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                                leslie.alexander@example.com
                            </p>
                        </div>
                    </div>
                    <div class="hidden sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm leading-6 text-gray-900">
                            Co-Founder / CEO
                        </p>
                        <p class="mt-1 text-xs leading-5 text-gray-500">
                            Last seen{" "}
                            <time datetime="2023-01-23T13:23Z">3h ago</time>
                        </p>
                    </div>
                </li>
                <li class="flex justify-between gap-x-6 py-5">
                    <div class="flex gap-x-4">
                        <img
                            class="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm font-semibold leading-6 text-gray-900">
                                Michael Foster
                            </p>
                            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                                michael.foster@example.com
                            </p>
                        </div>
                    </div>
                    <div class="hidden sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm leading-6 text-gray-900">
                            Co-Founder / CTO
                        </p>
                        <p class="mt-1 text-xs leading-5 text-gray-500">
                            Last seen{" "}
                            <time datetime="2023-01-23T13:23Z">3h ago</time>
                        </p>
                    </div>
                </li>
                <li class="flex justify-between gap-x-6 py-5">
                    <div class="flex gap-x-4">
                        <img
                            class="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm font-semibold leading-6 text-gray-900">
                                Dries Vincent
                            </p>
                            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                                dries.vincent@example.com
                            </p>
                        </div>
                    </div>
                    <div class="hidden sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm leading-6 text-gray-900">
                            Business Relations
                        </p>
                        <div class="mt-1 flex items-center gap-x-1.5">
                            <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                                <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                            </div>
                            <p class="text-xs leading-5 text-gray-500">
                                Online
                            </p>
                        </div>
                    </div>
                </li>
                <li class="flex justify-between gap-x-6 py-5">
                    <div class="flex gap-x-4">
                        <img
                            class="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm font-semibold leading-6 text-gray-900">
                                Lindsay Walton
                            </p>
                            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                                lindsay.walton@example.com
                            </p>
                        </div>
                    </div>
                    <div class="hidden sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm leading-6 text-gray-900">
                            Front-end Developer
                        </p>
                        <p class="mt-1 text-xs leading-5 text-gray-500">
                            Last seen{" "}
                            <time datetime="2023-01-23T13:23Z">3h ago</time>
                        </p>
                    </div>
                </li>
                <li class="flex justify-between gap-x-6 py-5">
                    <div class="flex gap-x-4">
                        <img
                            class="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm font-semibold leading-6 text-gray-900">
                                Courtney Henry
                            </p>
                            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                                courtney.henry@example.com
                            </p>
                        </div>
                    </div>
                    <div class="hidden sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm leading-6 text-gray-900">Designer</p>
                        <p class="mt-1 text-xs leading-5 text-gray-500">
                            Last seen{" "}
                            <time datetime="2023-01-23T13:23Z">3h ago</time>
                        </p>
                    </div>
                </li>
                <li class="flex justify-between gap-x-6 py-5">
                    <div class="flex gap-x-4">
                        <img
                            class="h-12 w-12 flex-none rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm font-semibold leading-6 text-gray-900">
                                Tom Cook
                            </p>
                            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                                tom.cook@example.com
                            </p>
                        </div>
                    </div>
                    <div class="hidden sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm leading-6 text-gray-900">
                            Director of Product
                        </p>
                        <div class="mt-1 flex items-center gap-x-1.5">
                            <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                                <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                            </div>
                            <p class="text-xs leading-5 text-gray-500">
                                Online
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );*/
}
