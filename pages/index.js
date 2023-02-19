import Image from "next/image";
import styles from "../styles/Home.module.css";
import { search } from "../lib/dummy-api";
import Link from "next/link";
import CustomHead from "../components/CustomHead";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

export default function Home() {
  return (
    <div>
      <CustomHead />
      <SearchForm />
    </div>
  );
}
