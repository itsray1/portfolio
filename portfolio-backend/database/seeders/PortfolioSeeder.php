<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Category;
use App\Models\AboutMe;
use App\Models\Skill;
use App\Models\Project;
use App\Models\WorkExperience;
use App\Models\Contact;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        // Role
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $userRole = Role::firstOrCreate(['name' => 'user']);

        // Category
        $backEndCategory= Category::firstOrCreate(['name' => 'Back-End Development']);
        $frontEndCategory = Category::firstOrCreate(['name' => 'Front-End Development']);
        $toolsCategory= Category::firstOrCreate(['name' => 'Tools & Integrations']);

        //User
        $user = User::create([
            'name' => 'Rayan Alsharief',
            'username' => 'rayan',
            'email' => 'ralsharef1@gmail.com',
            'password' => Hash::make('rayan22'),
        ]);

       
        $user->assignRole($adminRole);

        // About Me
        $user->aboutMe()->create([
            'first_name' => 'Rayan',
            'last_name' => 'Alsharief',
            'bio' => 'Computer Science Graduate | Web Development
                 As a Computer Science graduate, I am passionate about web development,
                 data analysis, and software engineering. With hands-on experience in Django, React, and SQL Server.
                 Beyond coding, I have experience in Power BI for data visualization and reporting.',
            'location' => 'Tripoli, Libya',
            'cv_url' => 'https://drive.google.com/file/d/1wJdlvw7LHj0QhpKEJqN7IqYKeLCfCjAn/view?usp=drivesdk',
            'email' => 'ralsharef1@gmail.com',
        ]);

        // Work Experiences
        $user->workExperiences()->createMany([
            [
                'job_title' => 'Data Analysis & Software Development Intern',
                'company_name' => 'Libyan Islamic Bank',
                'start_date' => '2024-09-01',
                'end_date' => '2024-12-01',
                'description' => 'Analyzed banking data using SQL and Power BI to create dashboards.',
            ],
            [
                'job_title' => 'Project Documentation Intern',
                'company_name' => 'PHIF',
                'start_date' => '2025-04-06',
                'end_date' => '2025-08-02',
                'description' => 'Participated in the documentation of the "Sahaty" project.',
            ],
        ]);

        // Projects
        $projects = $user->projects()->createMany([
            [
                'title' => 'Fahs',
                'description' => 'A web platform that allows users to access their medical records.',
                'url' => 'https://github.com/SaraGshash/FahsProject',
                'tech_stack' => json_encode(["Django", "SQLite", "React.js", "Tailwind CSS"]),
            ],
            [
                'title' => 'WALID GAJA – Jewelry Website',
                'description' => 'A luxury jewelry website featuring a clean, bilingual UI.',
                'url' => 'https://github.com/itsray1/GajWeb',
                'tech_stack' => json_encode(["React.js", "Tailwind CSS", "i18n"]),
            ],
            [
                'title' => 'Jobs Management Dashboard',
                'description' => 'A dashboard for managing job postings, applicants, and reports.',
                'url' => 'https://github.com/itsray1/dashboard',
                'tech_stack' => json_encode(["React.js", "Tailwind CSS", "Firebase"]),
            ],
        ]);
            $projects[0]->images()->create([
                'image_url' => 'project_images/01K1RKEEPJ23HPJY760XQT4EA6.png',
            ]);
             $projects[1]->images()->create([
                'image_url' => 'project_images/GajWeb.png',
            ]);

            $projects[2]->images()->create([
                'image_url' => 'project_images/01K1RKDJAYSNKG7TZSSHMA07HD.png',
            ]);

        //Skills
        $user->skills()->createMany([
            ['name' => 'Git & GitHub', 'level' => 'Beginner', 'progress' => 50,'category_id' =>$toolsCategory->id],
            ['name' => 'Firebase ', 'level' => 'Beginner', 'progress' => 25 ,'category_id' =>$backEndCategory->id],
            ['name' => 'Laravel (PHP)', 'level' => 'Beginner', 'progress' => 20,'category_id' =>$backEndCategory->id],
            ['name' => 'Django (Python)', 'level' => 'Beginner', 'progress' => 40,'category_id' =>$backEndCategory->id],
            ['name' => 'REST APIs', 'level' => 'Beginner', 'progress' => 25,'category_id' =>$backEndCategory->id],
            ['name' => 'MySQL / SQLite', 'level' => 'Beginner', 'progress' => 30,'category_id' =>$backEndCategory->id],
            ['name' => 'React.js', 'level' => 'Beginner', 'progress' => 60,'category_id' =>$frontEndCategory->id],
            ['name' => 'Tailwind CSS', 'level' => 'Beginner', 'progress' => 50,'category_id' =>$frontEndCategory->id],
            ['name' => 'JWT / Auth Systems', 'level' => 'Beginner', 'progress' => 25,'category_id' =>$toolsCategory->id],
        ]);

        // Contacts
        $user->contacts()->createMany([
            ['type' => 'email', 'value' => 'ralsharef1@gmail.com','label' => 'Email','icon' => 'Mail'],
            ['type' => 'phone', 'value' => '0919670722','label' => 'Phone Number','icon' => 'Phone'],
            ['type' => 'github', 'value' => 'https://github.com/itsray1','label' => 'Github','icon' => 'Github'],
            ['type' => 'linkedin', 'value' => 'https://www.linkedin.com/in/rayan-alsharief-95ba1a343','label' => 'LinkedIn','icon' => 'Linkedin'],
            ['type' => 'location', 'value' => 'Tripoli, Libya','label' => 'Location','icon' => 'MapPin'],
            ['type' => 'whatsapp', 'value' => 'https://wa.me/218919670722','label' => 'WhatsApp','icon' => 'MessageCircle'],
        ]);
    }
}
