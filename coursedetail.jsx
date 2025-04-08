import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from 'react-native';

const CourseDetailsScreen = ({ route, navigation }) => {
  const { course } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: course.image }} style={styles.image} />

      <View style={styles.header}>
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.instructor}>by {course.instructor}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{course.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lessons</Text>
        {course.lessons.map((lesson, index) => (
          <TouchableOpacity
            key={index}
            style={styles.lesson}
            onPress={() => navigation.navigate('Lesson', { lesson })}
          >
            <Text style={styles.lessonText}>{index + 1}. {lesson.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lesson', { lesson: course.lessons[0] })}>
        <Text style={styles.buttonText}>Start Course</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CourseDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  header: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  instructor: {
    marginTop: 4,
    fontSize: 16,
    color: '#666',
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  lesson: {
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  lessonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  button: {
    backgroundColor: '#4e8cff',
    padding: 16,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
