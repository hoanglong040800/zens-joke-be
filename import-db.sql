--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4 (Debian 15.4-2.pgdg120+1)
-- Dumped by pg_dump version 15.0

-- Started on 2023-10-07 11:15:13 +07

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE jokedb;
--
-- TOC entry 3354 (class 1262 OID 16384)
-- Name: jokedb; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE jokedb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE jokedb OWNER TO postgres;

\connect jokedb

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 3355 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 214 (class 1259 OID 16389)
-- Name: jokes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jokes (
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    created_by character varying,
    updated_by character varying,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    content character varying DEFAULT ''::character varying,
    upvote integer DEFAULT 0 NOT NULL,
    downvote integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.jokes OWNER TO postgres;

--
-- TOC entry 3348 (class 0 OID 16389)
-- Dependencies: 214
-- Data for Name: jokes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.jokes VALUES ('2023-10-07 04:13:21.066469+00', '2023-10-07 04:13:21.066469+00', NULL, NULL, '264d56c1-7aaf-4514-b085-945b87fbaef4', 'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."

The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."

The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."', 0, 0);
INSERT INTO public.jokes VALUES ('2023-10-07 04:13:29.162611+00', '2023-10-07 04:13:29.162611+00', NULL, NULL, 'fbdb8405-8f09-4faf-a5e1-948ead819e8f', 'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"

', 0, 0);
INSERT INTO public.jokes VALUES ('2023-10-07 04:13:36.024902+00', '2023-10-07 04:13:36.024902+00', NULL, NULL, 'e3bc499d-a85d-4c56-8f47-2eec0a1de55a', 'The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, ''I am going to eat that pussy once Jimmy leaves for school today!''"

', 0, 0);
INSERT INTO public.jokes VALUES ('2023-10-07 04:13:41.771634+00', '2023-10-07 04:13:41.771634+00', NULL, NULL, '9947cbad-987d-40b6-bbf2-0f7f69a1c08a', 'A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it''s either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"', 0, 0);


--
-- TOC entry 3205 (class 2606 OID 16401)
-- Name: jokes PK_2dde4fe8da52ed2be5fe6867273; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jokes
    ADD CONSTRAINT "PK_2dde4fe8da52ed2be5fe6867273" PRIMARY KEY (id);


-- Completed on 2023-10-07 11:15:14 +07

--
-- PostgreSQL database dump complete
--

