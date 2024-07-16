--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (Debian 16.3-1.pgdg120+1)
-- Dumped by pg_dump version 16.3 (Debian 16.3-1.pgdg120+1)

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
-- Name: unaccent; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS unaccent WITH SCHEMA public;


--
-- Name: EXTENSION unaccent; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION unaccent IS 'text search dictionary that removes accents';


--
-- Name: document_type; Type: TYPE; Schema: public; Owner: jeandidier
--

CREATE TYPE public.document_type AS ENUM (
    'project',
    'tips',
    'news',
    'cheatsheet'
);


ALTER TYPE public.document_type OWNER TO jeandidier;

--
-- Name: auto_generated_uuid_v4(); Type: FUNCTION; Schema: public; Owner: jeandidier
--

CREATE FUNCTION public.auto_generated_uuid_v4() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
	NEW.uuid := gen_random_uuid();
  RETURN NEW;
END;
$$;


ALTER FUNCTION public.auto_generated_uuid_v4() OWNER TO jeandidier;

--
-- Name: set_slug_from_name(); Type: FUNCTION; Schema: public; Owner: jeandidier
--

CREATE FUNCTION public.set_slug_from_name() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  NEW.slug := slugify(NEW.title);
NEW.content_address := NEW.slug || '.md';
NEW.image_address := (NEW.slug || '/') || NEW.image_address;
  RETURN NEW;
END
$$;


ALTER FUNCTION public.set_slug_from_name() OWNER TO jeandidier;

--
-- Name: slugify(text); Type: FUNCTION; Schema: public; Owner: jeandidier
--

CREATE FUNCTION public.slugify(value text) RETURNS text
    LANGUAGE sql IMMUTABLE STRICT
    AS $_$
  -- removes accents (diacritic signs) from a given string --
  WITH "unaccented" AS (
    SELECT unaccent("value") AS "value"
  ),
  -- lowercases the string
  "lowercase" AS (
    SELECT lower("value") AS "value"
    FROM "unaccented"
  ),
  -- replaces anything that's not a letter, number, hyphen('-'), or underscore('_') with a hyphen('-')
  "hyphenated" AS (
    SELECT regexp_replace("value", '[^a-z0-9\\-_]+', '-', 'gi') AS "value"
    FROM "lowercase"
  ),
  -- trims hyphens('-') if they exist on the head or tail of the string
  "trimmed" AS (
    SELECT regexp_replace(regexp_replace("value", '-+$', '', 'gi'), '^-+', '', 'gi') AS "value"
    FROM "hyphenated"
  )
  SELECT "value" FROM "trimmed";
$_$;


ALTER FUNCTION public.slugify(value text) OWNER TO jeandidier;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: document; Type: TABLE; Schema: public; Owner: jeandidier
--

CREATE TABLE public.document (
    uuid character varying(36) NOT NULL,
    title character varying(255),
    tags character varying(255)[],
    content_address character varying(255),
    date date,
    description character varying(1024),
    image_address character varying(255),
    slug character varying(255),
    is_image_icon boolean,
    type public.document_type DEFAULT 'project'::public.document_type NOT NULL
);


ALTER TABLE public.document OWNER TO jeandidier;

--
-- Name: document_author; Type: TABLE; Schema: public; Owner: jeandidier
--

CREATE TABLE public.document_author (
    document_uuid character varying(36) NOT NULL,
    member_uuid character varying(36) NOT NULL
);


ALTER TABLE public.document_author OWNER TO jeandidier;

--
-- Name: member; Type: TABLE; Schema: public; Owner: jeandidier
--

CREATE TABLE public.member (
    uuid character varying(36) NOT NULL,
    firstname character varying(50),
    lastname character varying(50),
    surname character varying(255),
    role character varying(255),
    year integer,
    image_address character varying(255),
    citation character varying(255),
    website character varying(255),
    linkedin character varying(255),
    mail character varying(255),
    github character varying(255),
    status character varying(255) DEFAULT 'member'::character varying NOT NULL
);


ALTER TABLE public.member OWNER TO jeandidier;

--
-- Data for Name: document; Type: TABLE DATA; Schema: public; Owner: jeandidier
--

COPY public.document (uuid, title, tags, content_address, date, description, image_address, slug, is_image_icon, type) FROM stdin;
5230f095-265d-4745-b013-0688eb87adcc	Xbox Live Goes Down in Nearly Seven-Hour Outage	{cybersecurity,"jeux videos"}	xbox-live-goes-down-in-nearly-seven-hour-outage.md	2024-07-01	Xbox Live, Microsoft’s multiplayer gaming and digital media network, was suffering a major outage Tuesday as thousands of users reported problems accessing it.	xbox-live-goes-down-in-nearly-seven-hour-outage/banner.jpg	xbox-live-goes-down-in-nearly-seven-hour-outage	f	news
de083996-81a8-4a33-8a3f-f23498374fe9	Ecclogy (Nuit de l'info 2023)	{challenge,web,django}	ecclogy-nuit-de-l-info-2023.md	2023-12-01	Site web réalisé dans le cadre de la Nuit de l'info, un challenge informatique en équipe avec comme thème 2023 la sensibilisation aux enjeux climatiques	ecclogy-nuit-de-l-info-2023/ecclogy.png	ecclogy-nuit-de-l-info-2023	t	project
3583b020-9ced-4f02-9466-24afe4fe9a42	Site web ./insah.sh	{web,angular}	site-web-insah-sh.md	2024-08-01	Réalisation du site web officiel de notre club informatique ./insa.sh	site-web-insah-sh/web_site.png	site-web-insah-sh	t	project
d97803ef-1820-4c5d-9d89-29b6f53da727	Guerre des Carrés	{node,javascript,socket,web,"jeux videos"}	guerre-des-carres.md	2023-03-01	Réplique de la célèbre "Pixel War" de Reddit fait maison	guerre-des-carres/guerre_des_carre.png	guerre-des-carres	t	project
07129f0a-26a0-404f-a040-eeaa1fb03602	Guide pour Jamie Street Fighter 6	{sf6,"street fighter 6",jamie,"jeux videos"}	guide-jamie-sf6.md	2024-06-28	This self-styled Chinatown peacekeeper aspires to the example set by Yun and Yang, the Twin Dragons. An expert dancer, Jamie places justice and friendship above all else, defending his town with martial skill.	guide-jamie-sf6/banner.jpeg	guide-jamie-sf6	f	cheatsheet
eab36d18-a475-4491-8258-56d82dd60aad	Range: Why Generalists Triumph in a Specialized World	{book,self-development}	range-why-generalists-triumph-in-a-specialized-world.md	2024-07-03	What's the most effective path to success in any domain? It's not what you think.	range-why-generalists-triumph-in-a-specialized-world/banner.jpg	range-why-generalists-triumph-in-a-specialized-world	f	tips
c772b296-3b1c-43ff-a058-560005caf6a5	Guide pour Manon Street Fighter 6	{sf6,"street fighter 6",manon,"jeux videos"}	guide-manon-sf6.md	2024-06-29	Manon Street Fighter 6 moves list, strategy guide, combos and character overview	guide-manon-sf6/banner.jpg	guide-manon-sf6	f	cheatsheet
016bf4e1-0089-4f03-ae9c-a3c599835948	regreSSHion: Remote Unauthenticated Code Execution Vulnerability in OpenSSH server	{cybersecurity,openssh,vulnerability}	regresshion-remote-unauthenticated-code-execution-vulnerability-in-openssh-server.md	2024-07-04	The Qualys Threat Research Unit (TRU) has discovered a Remote Unauthenticated Code Execution (RCE) vulnerability in OpenSSH’s server (sshd) in glibc-based Linux systems. CVE assigned to this vulnerability is CVE-2024-6387.	regresshion-remote-unauthenticated-code-execution-vulnerability-in-openssh-server/banner.jpg	regresshion-remote-unauthenticated-code-execution-vulnerability-in-openssh-server	f	news
\.


--
-- Data for Name: document_author; Type: TABLE DATA; Schema: public; Owner: jeandidier
--

COPY public.document_author (document_uuid, member_uuid) FROM stdin;
07129f0a-26a0-404f-a040-eeaa1fb03602	027dbefa-8f9b-4ef3-a3ae-cbee6154fbb8
c772b296-3b1c-43ff-a058-560005caf6a5	027dbefa-8f9b-4ef3-a3ae-cbee6154fbb8
016bf4e1-0089-4f03-ae9c-a3c599835948	9f6188f0-98a6-4462-b03b-7837d7c4cfff
eab36d18-a475-4491-8258-56d82dd60aad	52d52271-8730-45b3-a009-d931eb35d572
de083996-81a8-4a33-8a3f-f23498374fe9	027dbefa-8f9b-4ef3-a3ae-cbee6154fbb8
de083996-81a8-4a33-8a3f-f23498374fe9	9f6188f0-98a6-4462-b03b-7837d7c4cfff
de083996-81a8-4a33-8a3f-f23498374fe9	52d52271-8730-45b3-a009-d931eb35d572
de083996-81a8-4a33-8a3f-f23498374fe9	95c4393b-ef1b-4964-a811-17a161dd81bd
de083996-81a8-4a33-8a3f-f23498374fe9	ef45a355-2f02-4422-8dc1-8aa2b18b1198
de083996-81a8-4a33-8a3f-f23498374fe9	62212578-fdfc-4de1-b3a1-4dd14145b229
3583b020-9ced-4f02-9466-24afe4fe9a42	ef45a355-2f02-4422-8dc1-8aa2b18b1198
3583b020-9ced-4f02-9466-24afe4fe9a42	62212578-fdfc-4de1-b3a1-4dd14145b229
3583b020-9ced-4f02-9466-24afe4fe9a42	52d52271-8730-45b3-a009-d931eb35d572
3583b020-9ced-4f02-9466-24afe4fe9a42	027dbefa-8f9b-4ef3-a3ae-cbee6154fbb8
d97803ef-1820-4c5d-9d89-29b6f53da727	9f6188f0-98a6-4462-b03b-7837d7c4cfff
d97803ef-1820-4c5d-9d89-29b6f53da727	62212578-fdfc-4de1-b3a1-4dd14145b229
5230f095-265d-4745-b013-0688eb87adcc	027dbefa-8f9b-4ef3-a3ae-cbee6154fbb8
\.


--
-- Data for Name: member; Type: TABLE DATA; Schema: public; Owner: jeandidier
--

COPY public.member (uuid, firstname, lastname, surname, role, year, image_address, citation, website, linkedin, mail, github, status) FROM stdin;
9f6188f0-98a6-4462-b03b-7837d7c4cfff	Maxime	Lemaitre	maxlem24	Membre	4	avatar-maxime.jpg	Blablabla3			maxlem24@fakemail.com		member
95c4393b-ef1b-4964-a811-17a161dd81bd	Clément	Ogé	Tenclea	Membre	4	avatar-clement.jpg	Blablabla5	\N	https://www.linkedin.com/in/coge/	\N	\N	member
ef45a355-2f02-4422-8dc1-8aa2b18b1198	Nathan	Petit	Prismey	Membre	2	avatar-nathan.jpg	Blablabla6	\N	prismey@mail.com	\N	\N	member
62212578-fdfc-4de1-b3a1-4dd14145b229	Baptiste	Saltel	SHA_foin	Membre	4	avatar-baptiste.jpg	feur	\N	https://github.com/DYSTOpyy	\N	\N	member
e5f9df1d-123a-471c-9b18-45ab6ac8a1c7	Sylvain	Sausse	fredo	Foundateur & Président	5	avatar-sylvain.jpg	Blablabla2		https://www.linkedin.com/in/sylvain-sausse/	accounts@saussesylva.in	https://github.com/f7ed0	bureau
027dbefa-8f9b-4ef3-a3ae-cbee6154fbb8	Louison	Bednarowicz	TupperWare	Responsable communication	2	avatar-louison.jpg	Blablabla1	https://webdev.knowitbetter.fr	https://www.linkedin.com/in/louisonbednarowicz/			member
52d52271-8730-45b3-a009-d931eb35d572	Maël	Advisse	mael_advisse	Membre	2	avatar-mael.jpg	Blablabla4		https://www.linkedin.com/in/mael-advisse-13b360292/			member
\.


--
-- Name: document set_uuid_before_insert; Type: TRIGGER; Schema: public; Owner: jeandidier
--

CREATE TRIGGER set_uuid_before_insert BEFORE INSERT ON public.document FOR EACH ROW EXECUTE FUNCTION public.auto_generated_uuid_v4();


--
-- Name: member set_uuid_before_insert; Type: TRIGGER; Schema: public; Owner: jeandidier
--

CREATE TRIGGER set_uuid_before_insert BEFORE INSERT ON public.member FOR EACH ROW EXECUTE FUNCTION public.auto_generated_uuid_v4();


--
-- Name: document trg_slug_insert; Type: TRIGGER; Schema: public; Owner: jeandidier
--

CREATE TRIGGER trg_slug_insert BEFORE INSERT ON public.document FOR EACH ROW WHEN (((new.title IS NOT NULL) AND (new.slug IS NULL))) EXECUTE FUNCTION public.set_slug_from_name();


--
-- PostgreSQL database dump complete
--

