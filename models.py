import sqlite3 
from sqlite3 import Error

def sql_command(command):
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    results = cursor.execute(command)
    results = results.fetchall()
    conn.commit()
    cursor.close()

    return results

class Exams:
    def __init__(self):
        self.movies_model ='''
        CREATE TABLE IF NOT EXISTS cs61a_fa19 (
        "Column_1" integer,
        "question_type" text,
        "question_info" text,
        "question_link" text,
        "solution_link" text,
        "video_link" text);
        '''

        sql_command(self.movies_model)
    
    def topics(self):
        get_topics = '''
                    SELECT DISTINCT question_type from cs61a_fa19;
                    '''
        return sql_command(get_topics)
    
    def questions(self, topic):
        get_questions = '''
                    SELECT * from cs61a_fa19 WHERE question_type='{}';
                    '''.format(topic)
        
        return sql_command(get_questions)

    def question(self, topic, question):
        get_question = '''
                        SELECT * from cs61a_fa19 WHERE question_type='{}' AND question_info='{}';
                       '''.format(topic, question)

        return sql_command(get_question)